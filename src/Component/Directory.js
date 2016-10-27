import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import cn from 'classnames';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import './Directory.css';
import Thumbnail from './Thumbnail';
import File from '../Model/File';
import ImageWithLoader from './ImageWithLoader';

class DirectoryHeader extends Component {
  static propTypes = {
    directory: PropTypes.object.isRequired,
    viewportWidth: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      backgroundLoaded: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.directory !== this.props.directory) {
      this.setState({
        backgroundLoaded: null,
      });
    }
  }

  render() {
    const { directory, viewportWidth } = this.props;

    if (!directory.parent && !directory.directoryThumbnail) {
      return null;
    }


    const styles = {};
    if (directory.directoryThumbnail) {
      if (this.state.backgroundLoaded) {
        const backgroundImage = directory.directoryThumbnail.generateCrop(viewportWidth, 400);
        styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0.8)),
          url(${backgroundImage})`;
      }
    }

    return (
      <header
        className={cn(
          directory.directoryThumbnail && 'DirectoryHeader--WithBanner',

        )}
      >
        {directory.directoryThumbnail &&
          <div>
            <ImageWithLoader
              src={directory.directoryThumbnail.generateCrop(viewportWidth, 400)}
              onLoad={() => this.setState({ backgroundLoaded: true })}
              loaderProps={{ className: 'DirectoryHeader__Image' }}
            />
            <div
              className={cn(
                'DirectoryHeader__Image',
                this.state.backgroundLoaded && 'DirectoryHeader__Image--Opaque'
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

        {directory.directoryThumbnail &&
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
    viewportWidth: PropTypes.number.isRequired,
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

        <DirectoryHeader
          directory={directory}
          viewportWidth={this.props.viewportWidth}
        />

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
