import React, { Component, PropTypes } from 'react';
import './App.css';
import Thumbnail from './Thumbnail';

class Image extends Component {
  static propTypes = {
    // directory: PropTypes.object,
    // findDirectory: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <img
          src="http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg"
          style={{ 'max-width': '100%' }}
        />
      </div>
    );
  }
}

export default Image;
