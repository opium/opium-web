import React, { Component } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ThumbnailList">
          <Thumbnail
            title="Alps"
            image="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-200"
          />
          <Thumbnail
            title="Pacific Ocean"
            image="http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/200-200"
          />
          <Thumbnail
            title="Venezia"
            image="http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg/thumbs/200-200"
          />
        </div>

        <footer className="Footer">
          Total number of items: 3
        </footer>
      </div>
    );
  }
}

export default App;
