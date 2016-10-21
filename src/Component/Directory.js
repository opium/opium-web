import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Directory.css';
import Thumbnail from './Thumbnail';

class Directory extends Component {
  static propTypes = {
    directory: PropTypes.object,
    findDirectory: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);
  }

  componentDidMount() {
    this.props.findDirectory(this.props.params.slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.slug !== prevProps.params.slug) {
      this.props.findDirectory(this.props.params.slug);
    }
  }

  renderOneLine(line) {
    const directory = this.props.directory;

    return line.entrySeq().map(([id, thumbnail]) => {
      const child = directory.getChildById(id);
      return (
        <Link to={`/${child.slug}`}>
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
    const directory = this.props.directory;

    return (
      <div>
        <div className="ThumbnailList">
          {directory && directory.imageLines.map(this.renderOneLine)}
        </div>

        <footer className="Footer">
          Total number of items: {directory && directory.getChildrenSize()}
        </footer>
      </div>
    );
  }
}

export default Directory;
