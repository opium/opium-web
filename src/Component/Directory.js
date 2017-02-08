import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import Upload from 'react-icons/lib/ti/upload';
import './Directory.css';
import Thumbnail from './Thumbnail';
import File from '../Model/File';
import DirectoryModel from '../Model/Directory';
import Loader from './Loader';
import { ROUTE_UPLOAD, ROUTE_DIRECTORY_MAP } from '../RouteName';
import { computeRectangleList }  from '../Tool/LineLayout';


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
    directory: PropTypes.object.isRequired,
    displayAdminLink: PropTypes.bool.isRequired,
    hasBackground: PropTypes.bool.isRequired,
    backgroundImage: (props, propName) => {
      if (props.hasBackground && typeof props[propName] !== 'string') {
        throw new Error('backgroundImage should be a string');
      }
    },
    backgroundLoaded: (props, propName) => {
      if (props.hasBackground && typeof props[propName] !== 'boolean') {
        throw new Error('backgroundImage should be a string');
      }
    },
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
    if (this.props.backgroundImage) {
      this.props.loadImage(this.props.backgroundImage);
    }
  }

  render() {
    const { directory, backgroundLoaded, backgroundImage } = this.props;

    const styles = {};
    if (backgroundLoaded && backgroundImage) {
      styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.8)),
        url(${backgroundImage})`;
    }

    const bounds = directory.getPositionBounds();

    const markers = directory.children
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
                this.props.backgroundLoaded && 'DirectoryHeader__Image--Opaque'
              )}
              style={styles}
            />
          </div>
        }

        {directory.parent &&
          <Link to={`/${directory.parent.slug}/`} className="DirectoryHeader__Back">
            <ChevronLeft />
            Back to albums
          </Link>
        }

        {this.props.displayAdminLink &&
          <Link to={`${ROUTE_UPLOAD}${directory.slug}`} className="DirectoryHeader__UploadLink">
            <Upload />
            Upload file
          </Link>
        }

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
};

class Directory extends PureComponent {
  static propTypes = {
    directory: PropTypes.object,
    findDirectory: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    displayAdminLink: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);

    this.state = {
      viewportWidth: document.body.clientWidth,
    };
  }

  componentDidMount() {
    let resizeTimer = null;
    window.onresize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
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

  renderOneLine(line, i) {
    const directory = this.props.directory;

    return (
      <div className="Directory__Row" key={i}>
        {line.map((rectangle, id) => {
          const child = rectangle.item;
          const childSlug = child instanceof File ?
            (directory.slug ? `/${directory.slug}/${child.slug}` : `/${child.slug}`) :
            `/${child.slug}/`;

          const image = child instanceof File ? child : child.directoryThumbnail;

          return (
            <Link
              to={childSlug}
              key={id}
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
    if (this.props.children) {
      return this.props.children;
    }

    const directory = this.props.directory;

    if (!directory) {
      return <div />;
    }

    const computedFileList = computeRectangleList(directory.children, this.state.viewportWidth, 200, 10);

    return (
      <div>
        <Helmet title={directory.name} />

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
