/* global container */
import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends Component {
  constructor(props) {
    super(props);

    this.getThumbnail = this.getThumbnail.bind(this);

    this.state = {
      thumbnailList: [],
      imageLines: [],
    };
  }

  componentDidMount() {
    container.sdk.directory.findBy({ gutter: 10 })
      .then(directories => {
        this.setState({
          thumbnailList: directories.get('children'),
          imageLines: directories.get('image_lines'),
        });
      })
    ;
  }

  getThumbnail(id) {
    return this.state.thumbnailList.find(item => item.get('id') === parseInt(id, 10));
  }

  render() {
    return (
      <div>
        <div className="ThumbnailList">
          {this.state.imageLines.map(line =>
            line.map((thumbnail, id) =>
              <Thumbnail
                key={id}
                title={this.getThumbnail(id).get('name')}
                image={thumbnail.get('thumbs')}
              />
            )
          )}
        </div>

        <footer className="Footer">
          Total number of items: 3
        </footer>
      </div>
    );
  }
}

export default App;
