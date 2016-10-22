import React, { Component, PropTypes } from 'react';

class File extends Component {
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

export default File;
