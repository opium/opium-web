import React, { Component, PropTypes } from 'react';
import './Directory.css';
import Thumbnail from './Thumbnail';

class Directory extends Component {
  static propTypes = {
    directory: PropTypes.object,
    findDirectory: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);
  }

  componentDidMount() {
    this.props.findDirectory();
  }

  renderOneLine(line) {
    const directory = this.props.directory;

    return line.entrySeq().map(([id, thumbnail]) =>
      <Thumbnail
        key={id}
        title={directory.getChildById(id).name}
        image={thumbnail.thumbs}
      />
    );
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
