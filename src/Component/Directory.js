import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import cn from 'classnames';
import './Directory.css';
import Thumbnail from './Thumbnail';
import File from '../Model/File';

const DirectoryHeader = ({directory}) => {
  if (!directory.parent && !directory.directoryThumbnail) {
    return null;
  }

  const styles = {};
  if (directory.directoryThumbnail) {
    styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8)), url(${directory.directoryThumbnail.thumbnails.get('banner')})`;
  }

  return (
    <header
      className={cn(directory.directoryThumbnail && 'DirectoryHeaderWithBanner')}
      style={styles}
    >
      {directory.parent &&
        <Link to={`/${directory.parent.slug}`} className="Back">
          &lt;
          Back to albums
        </Link>
      }

      {directory.directoryThumbnail &&
        <h1 className="DirectoryHeaderTitle">
          {directory.name}
        </h1>
      }
    </header>
  );
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

        <DirectoryHeader directory={directory} />

        <div className="ThumbnailList">
          {directory.imageLines.map(this.renderOneLine)}
        </div>

        <footer className="Footer">
          Total number of items: {directory.getChildrenSize()}
        </footer>
      </div>
    );
  }
}

export default Directory;
