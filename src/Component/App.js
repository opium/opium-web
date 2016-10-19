/* global container */
import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends Component {
  constructor(props) {
    super(props);

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

  render() {
    const directory = this.state.directory;

    return (
      <div>
        <div className="ThumbnailList">
          {directory && directory.imageLines.toSeq().map(line =>
            line.toKeyedSeq().map((thumbnail, id) =>
              <Thumbnail
                key={id}
                title={directory.getChildById(id).name}
                image={thumbnail.get('thumbs')}
              />
            )
          )}
        </div>

        <footer className="Footer">
          Total number of items: {directory && directory.children.size}
        </footer>
      </div>
    );
  }
}

export default App;
