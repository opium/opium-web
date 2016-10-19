/* global container */
import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderOneLine = this.renderOneLine.bind(this);

    this.state = {
      directory: null,
    };
  }

  componentDidMount() {
    container.sdk.directory.findBy({ gutter: 10 })
      .then(directory => {
        this.setState({
          directory,
        });
      })
    ;
  }

  renderOneLine(line) {
    const directory = this.state.directory;

    return line.entrySeq().map(([id, thumbnail]) =>
      <Thumbnail
        key={id}
        title={directory.getChildById(id).name}
        image={thumbnail.thumbs}
      />
    );
  }

  render() {
    const directory = this.state.directory;

    return (
      <div>
        <div className="ThumbnailList">
          {directory && directory.imageLines.map(this.renderOneLine)}
        </div>

        <footer className="Footer">
          Total number of items: {directory && directory.children.size}
        </footer>
      </div>
    );
  }
}

export default App;
