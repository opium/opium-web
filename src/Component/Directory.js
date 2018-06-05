import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import cn from 'classnames';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import Upload from 'react-icons/lib/ti/upload';
import Plus from 'react-icons/lib/ti/plus';
import './Directory.css';
import Thumbnail from './Thumbnail';
import File from '../Model/File';
import DirectoryModel from '../Model/Directory';
import Loader from './Loader';
import Button from './Button';
import { ROUTE_UPLOAD, ROUTE_DIRECTORY_MAP, ROUTE_CREATE_DIR } from '../RouteName';
import { computeRectangleList }  from '../Tool/LineLayout';


function AdminLinks({ directory, displayAdminLink }) {
  return (
    <div className="DirectoryHeader__ActionLinks">
      <Button secondary tag={Link} to={`${ROUTE_CREATE_DIR}${directory.slug}`}>
        <Plus />
        Create directory
      </Button>

      <Button secondary tag={Link} to={`${ROUTE_UPLOAD}${directory.slug}`}>
        <Upload />
        Upload file
      </Button>
    </div>
  );
}

const DirectoryMap = ({ bounds, markers }) =>
  <Map
    className="DirectoryHeader__Map"
    bounds={[[bounds.get('top'), bounds.get('left')], [bounds.get('bottom'), bounds.get('right')]]}
    dragging={false}
    touchZoom={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
    boxZoom={false}
  >
    <TileLayer
      url='//tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
    />
    {markers.map((marker, i) =>
      <Marker key={i} position={marker} />
    )}
  </Map>
;

class DirectoryHeader extends PureComponent {
  static propTypes = {
    directory: PropTypes.instanceOf(DirectoryModel).isRequired,
    displayAdminLink: PropTypes.bool.isRequired,
    hasBackground: PropTypes.bool.isRequired,
    backgroundImage: (props, propName) => {
      if (props.hasBackground && typeof props[propName] !== 'string') {
        throw new Error('backgroundImage should be a string');
      }
    },
    localBackgroundImage: PropTypes.string,
    loadImage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.backgroundImage !== this.props.backgroundImage) {
      this.loadImage();
    }
  }

  loadImage() {
    if (this.props.hasBackground) {
      this.props.loadImage(this.props.backgroundImage);
    }
  }

  render() {
    const { directory, localBackgroundImage, backgroundImage } = this.props;

    const styles = {};
    if (localBackgroundImage) {
      styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.8)),
        url(${localBackgroundImage})`;
    }

    const bounds = directory.getPositionBounds();

    const markers = directory.displayableChildren
      .filter(child => !!child.position)
      .map(child => [child.position.get('lat'), child.position.get('lng')]);

    return (
      <header
        className={cn(
          'DirectoryHeader',
          backgroundImage && 'DirectoryHeader--WithBanner',

        )}
      >
        {backgroundImage &&
          <div>
            <Loader color="#1eb694" className="DirectoryHeader__Image" />
            <div
              className={cn(
                'DirectoryHeader__Image',
                this.props.localBackgroundImage && 'DirectoryHeader__Image--Opaque'
              )}
              style={styles}
            />
          </div>
        }

        {directory.parent &&
          <Button to={`/${directory.parent.slug ? `${directory.parent.slug}/` : ''}`} tag={Link} primary large>
            <ChevronLeft />
            Back to albums
          </Button>
        }

        <AdminLinks directory={directory} displayAdminLink={this.props.displayAdminLink} />

        {backgroundImage &&
          <h1 className="DirectoryHeader__Title">
            {directory.name}
          </h1>
        }

        {bounds &&
          <Link className="DirectoryHeader__MapContainer" to={`${ROUTE_DIRECTORY_MAP}${directory.slug}`}>
            <DirectoryMap bounds={bounds} markers={markers} />
          </Link>
        }
      </header>
    );
  }
}

class Directory extends PureComponent {
  static propTypes = {
    directory: PropTypes.instanceOf(DirectoryModel),
    findDirectory: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    displayAdminLink: PropTypes.bool.isRequired,
    isFetchingDirectory: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.resizeTimer = null;

    this.renderOneLine = this.renderOneLine.bind(this);

    this.state = {
      viewportWidth: document.body.clientWidth,
    };
  }

  componentDidMount() {
    window.onresize = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({ viewportWidth: document.body.clientWidth });
      }, 250);
    };

    this.props.findDirectory(this.props.slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findDirectory(this.props.slug);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.resizeTimer);
  }

  renderOneLine(line, i) {
    const directory = this.props.directory;

    return (
      <div className="Directory__Row" key={`${directory.id}-${i}`}>
        {line.map((rectangle, id) => {
          const child = rectangle.item;
          const childSlug = child instanceof File ?
            (directory.slug ? `/${directory.slug}/${child.slug}` : `/${child.slug}`) :
            `/${child.slug}/`;

          const image = child instanceof File ? child : child.directoryThumbnail;

          return (
            <Link
              to={childSlug}
              key={childSlug}
            >
              <Thumbnail
                title={child instanceof DirectoryModel ? child.name : null}
                image={image && image.generateCrop('auto', rectangle.geometry.height)}
                width={rectangle.geometry.width}
                height={rectangle.geometry.height}
              />
            </Link>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.isFetchingDirectory) {
      return null;
    }

    const directory = this.props.directory;

    if (!directory) {
      return <div />;
    }

    const computedFileList = computeRectangleList(directory.displayableChildren, this.state.viewportWidth, 200, 10);

    return (
      <div>
        <Helmet>
          <title>{directory.name}</title>
        </Helmet>

        <DirectoryHeader {...this.props} />

        <div>
          {computedFileList.map(this.renderOneLine)}
        </div>

        <footer className="DirectoryFooter">
          Total number of items: {directory.getChildrenSize()}
        </footer>
      </div>
    );
  }
}

export default Directory;
