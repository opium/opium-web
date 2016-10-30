import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import cn from 'classnames';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import './Directory.css';
import Thumbnail from './Thumbnail';
import File from '../Model/File';
import Loader from './Loader';

class DirectoryHeader extends Component {
  static propTypes = {
    directory: PropTypes.object.isRequired,
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
    this.props.loadImage(this.props.backgroundImage);
  }

  render() {
    const { directory, backgroundLoaded, backgroundImage } = this.props;

    if (!directory.parent && !backgroundImage) {
      return null;
    }


    const styles = {};
    if (backgroundLoaded && backgroundImage) {
      styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.8)),
        url(${backgroundImage})`;
    }

    return (
      <header
        className={cn(
          backgroundImage && 'DirectoryHeader--WithBanner',

        )}
      >
        {backgroundImage &&
          <div>
            <Loader color="#594F3F" className="DirectoryHeader__Image" />
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
          <Link to={`/${directory.parent.slug}`} className="DirectoryHeader__Back">
            <ChevronLeft />
            Back to albums
          </Link>
        }

        {backgroundImage &&
          <h1 className="DirectoryHeader__Title">
            {directory.name}
          </h1>
        }
      </header>
    );
  }
};

class Directory extends Component {
  static propTypes = {
    directory: PropTypes.object,
    findDirectory: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);
  }

  componentDidMount() {
    this.props.findDirectory(this.props.slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findDirectory(this.props.slug);
    }
  }

  renderOneLine(line) {
    const directory = this.props.directory;

    return line.entrySeq().map(([id, thumbnail]) => {
      const child = directory.getChildById(id);
      const childSlug = child instanceof File ?
        `/${directory.slug}/${child.slug}` :
        `/${child.slug}`;

      return (
        <Link to={childSlug}>
          <Thumbnail
            key={id}
            title={child.name}
            image={thumbnail.thumbs}
          />
        </Link>
      );
    });
  }

  render() {
    if (this.props.children) {
      return this.props.children;
    }

    const directory = this.props.directory;

    if (!directory) {
      return <div />;
    }

    return (
      <div>
        <Helmet title={directory.name} />

        <DirectoryHeader {...this.props} />

        <div className="Directory__ThumbnailList">
          {directory.imageLines.map(this.renderOneLine)}
        </div>

        <footer className="DirectoryFooter">
          Total number of items: {directory.getChildrenSize()}
        </footer>
      </div>
    );
  }
}

export default Directory;
