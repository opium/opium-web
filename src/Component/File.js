import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Map, Marker, setIconDefaultImagePath, TileLayer } from 'react-leaflet';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import ChevronRight from 'react-icons/lib/ti/chevron-right';
import Swipeable from 'react-swipeable';
import FileModel from '../Model/File';
import AddressAutoggest from './AddressAutosuggest';
import Loader from './Loader';
import 'leaflet/dist/leaflet.css';
import './File.css';

const BackLink = ({file, ...props}) => {
  if (!file.parent) {
    return null;
  }

  const link = file.parent.slug ? `/${file.parent.slug}/` : '/';
  return (
    <Link to={link} {...props}>
      <ChevronLeft /> {file.parent.name || 'Back to albums'}
    </Link>
  );
};

const PrevLink = ({file}) => {
  if (!file.previous || !(file.previous instanceof FileModel)) {
    return null;
  }

  const link = file.parent.slug ? `/${file.parent.slug}/${file.next.slug}` : `/${file.previous.slug}`;
  return (
    <Link className="FileOverlay__Link FileOverlay__Link--Prev" to={link}>
      <div className="FileOverlay__ChevronContainer">
        <ChevronLeft />
      </div>
    </Link>
  );
};

const NextLink = ({file}) => {
  if (!file.next || !(file.next instanceof FileModel)) {
    return null;
  }

  const link = file.parent.slug ? `/${file.parent.slug}/${file.next.slug}` : `/${file.next.slug}`;
  return (
    <Link className="FileOverlay__Link FileOverlay__Link--Next" to={link}>
      <div className="FileOverlay__ChevronContainer">
        <ChevronRight />
      </div>
    </Link>
  );
};

const Exif = ({file}) =>
  <table className="Table">
    <tbody>
      <tr>
        <th>Filename</th>
        <td>
          {file.name}
        </td>
      </tr>
      <tr>
        <th>Camera</th>
        <td>
          {file.exif.get('Make')}
          {' '}
          {file.exif.get('Model')}
        </td>
      </tr>
      <tr>
        <th>Date</th>
        <td>
          {file.exif.get('DateTime')}
        </td>
      </tr>
      <tr>
        <th>Size</th>
        <td>
          {file.exif.get('ExifImageWidth')}
          x
          {file.exif.get('ExifImageLength')}
        </td>
      </tr>
    </tbody>
  </table>
;

class FileMap extends PureComponent {
  constructor(props) {
    super(props);

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  onSuggestionSelected(event, { suggestion }) {
    const { file, updateFilePosition } = this.props;

    updateFilePosition(file, suggestion.lat, suggestion.lon);
  }

  render() {
    const { file, canUpdatePosition } = this.props;
    const addressAutosuggest = canUpdatePosition && <AddressAutoggest onSuggestionSelected={this.onSuggestionSelected} />;

    if (!file.position) {
      return addressAutosuggest;
    }

    const position = [file.position.get('lat'), file.position.get('lng')];

    return (
      <div>
        <Map
          style={{ width: '100%', height: '200px' }}
          center={position}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            url='//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} />
        </Map>

        {addressAutosuggest}
      </div>
    );
  }
};

class File extends PureComponent {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel),
    isFetchingFile: PropTypes.bool.isRequired,
    isLoadedImage: PropTypes.bool.isRequired,
    isDirectoryCoverChanging: PropTypes.bool.isRequired,
    findFile: PropTypes.func.isRequired,
    removeCurrentFile: PropTypes.func.isRequired,
    viewportHeight: PropTypes.number.isRequired,
    pushLocation: PropTypes.func.isRequired,
    updateFilePosition: PropTypes.func.isRequired,
    canEdit: PropTypes.bool.isRequired,
    updateDirectoryCover: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleKeyup = this.handleKeyup.bind(this);
    this.setAsDirectoryCover = this.setAsDirectoryCover.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
    this.onSwipingRight = this.onSwipingRight.bind(this);
    this.onSwipingLeft = this.onSwipingLeft.bind(this);

    this.state = {
      imgPosition: null,
    };
  }

  componentDidMount() {
    this.props.findFile(this.props.slug);

    window.addEventListener('keydown', this.handleKeyup);
  }

  componentWillUpdate(nextProps) {
    if (this.props.slug !== nextProps.slug) {
      this.setState ({
        imgPosition: null,
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findFile(this.props.slug);
    }

    if(this.props.file !== prevProps.file) {
      this.loadImage();
    }
  }

  loadImage() {
    const src = this.props.file.thumbnails.get('image');
    if (src) {
      this.props.loadImage(src);
    }
  }

  componentWillUnmount() {
    this.props.removeCurrentFile();
    window.removeEventListener('keydown', this.handleKeyup);
  }

  goToNext() {
    const file = this.props.file;

    if (file.next) {
      this.props.pushLocation(`/${file.parent.slug}/${file.next.slug}`);
    }
  }

  goToPrevious() {
    const file = this.props.file;

    if (file.previous) {
      this.props.pushLocation(`/${file.parent.slug}/${file.previous.slug}`);
    }
  }

  handleKeyup(e) {
    switch (e.keyCode) {
      case 37:
        this.goToPrevious();
        break;
      case 39:
        this.goToNext();
        break;
      default:
        break;
    }
  }

  setAsDirectoryCover(evt) {
    evt.preventDefault();

    const file = this.props.file;
    this.props.updateDirectoryCover(file.parent, this.props.file);
  }

  onSwipingRight(event, delta) {
    return this.setState({ imgPosition: delta });
  }

  onSwipingLeft(event, delta) {
    return this.setState({ imgPosition: -delta });
  }

  render() {
    const file = this.props.file;

    if (!file) {
      return null;
    }

    if (!file.thumbnails.get('image') || this.props.isFetchingFile) {
      return <div />;
    }

    const imageStyle = {};
    if (this.state.imgPosition) {
      imageStyle.marginRight = -this.state.imgPosition;
      imageStyle.marginLeft = this.state.imgPosition;
    }

    return (
      <div>
        <Helmet title={file.name} />

        <header className="FileHeader">
          <div className="FileHeader__BackContainer">
            <BackLink file={file} className="FileHeader__BackToAlbum" />
          </div>
        </header>

        <Swipeable
          className="File__MainContainer"
          onSwipingRight={this.onSwipingRight}
          onSwipingLeft={this.onSwipingLeft}
          onSwipedRight={this.goToPrevious}
          onSwipedLeft={this.goToNext}
        >
          <div
            className="File__ImageContainer"
            style={{ height: `${this.props.viewportHeight}px` }}
          >
            {this.props.isLoadedImage ?
              <img
                src={file.thumbnails.get('image')}
                alt={file.name}
                className="File__Image"
                style={imageStyle}
              /> :
             <Loader color="#1eb694" />
            }
          </div>

          <PrevLink file={file} />
          <NextLink file={file} />
        </Swipeable>

        <FileMap
          canUpdatePosition={this.props.canEdit}
          file={file}
          updateFilePosition={this.props.updateFilePosition}
        />

        <Exif file={file} />


        {this.props.canEdit && (
          !this.props.isDirectoryCoverChanging ?
            <a
              href="#set-as-cover"
              onClick={this.setAsDirectoryCover}
              className="File__Button--SetCover"
            >
              Set as directory cover
            </a> :
             <Loader color="#1eb694" />
          )
        }
      </div>
    );
  }
}

// waiting fo https://github.com/PaulLeCam/react-leaflet/pull/238 to be merged
setIconDefaultImagePath('//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/images/');

export default File;
