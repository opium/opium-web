import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Map, Marker, setIconDefaultImagePath, TileLayer } from 'react-leaflet';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import ChevronRight from 'react-icons/lib/ti/chevron-right';
import FileModel from '../Model/File';
import AddressAutoggest from './AddressAutosuggest';
import Loader from './Loader';
import 'leaflet/dist/leaflet.css';
import './File.css';

const BackLink = ({file, ...props}) => {
  if (!file.parent) {
    return null;
  }

  return (
    <Link to={`/${file.parent.slug}`} {...props}>
      <ChevronLeft /> {file.parent.name}
    </Link>
  );
};

const PrevLink = ({file}) => {
  if (!file.previous) {
    return null;
  }

  return (
    <Link className="FileOverlay__Link FileOverlay__Link--Prev" to={`/${file.parent.slug}/${file.previous.slug}`}>
      <div className="FileOverlay__ChevronContainer">
        <ChevronLeft />
      </div>
    </Link>
  );
};

const NextLink = ({file}) => {
  if (!file.next) {
    return null;
  }

  return (
    <Link className="FileOverlay__Link FileOverlay__Link--Next" to={`/${file.parent.slug}/${file.next.slug}`}>
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

const FileMap = ({ file, updateFilePosition, canUpdatePosition }) => {
  const onSuggestionSelected = (event, { suggestion }) => {
    updateFilePosition(file, suggestion.lat, suggestion.lon);
  };

  const addressAutosuggest = canUpdatePosition && <AddressAutoggest onSuggestionSelected={onSuggestionSelected} />;

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
};

class File extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel).isRequired,
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
  }

  componentDidMount() {
    this.props.findFile(this.props.slug);

    window.addEventListener('keydown', this.handleKeyup);

    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findFile(this.props.slug);
    }

    this.loadImage();
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

  handleKeyup(e) {
    const file = this.props.file;

    switch (e.keyCode) {
      case 37:
        if (file.previous) {
          this.props.pushLocation(`/${file.parent.slug}/${file.previous.slug}`);
        }
        break;
      case 39:
        if (file.next) {
          this.props.pushLocation(`/${file.parent.slug}/${file.next.slug}`);
        }
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

  render() {
    const file = this.props.file;

    if (!file.thumbnails.get('image') || this.props.isFetchingFile) {
      return <div />;
    }

    return (
      <div>
        <Helmet title={file.name} />

        <header className="FileHeader">
          <div className="FileHeader__BackContainer">
            <BackLink file={file} className="FileHeader__BackToAlbum" />
          </div>
          <h1 className="FileHeader__Title">
            {file.name}
          </h1>
        </header>

        <div className="File__MainContainer">
          <div
            className="File__ImageContainer"
            style={{ height: `${this.props.viewportHeight - 100}px` }}
          >
            {this.props.isLoadedImage ?
              <img
                src={file.thumbnails.get('image')}
                alt={file.name}
                className="File__Image"
              /> :
             <Loader color="#1eb694" />
            }
          </div>

          <PrevLink file={file} />
          <NextLink file={file} />
        </div>

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
