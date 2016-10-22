import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import FileModel from '../Model/File';

class File extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel).isRequired,
    // findDirectory: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet title="Foo" />
        <img
          src="http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg"
          alt="My title"
          style={{ maxWidth: '100%' }}
        />
      </div>
    );
  }
}

export default File;
