/* global container */
import React, { Component, PropTypes } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends Component {
  static propTypes = {
    directory: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);
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

export default App;
