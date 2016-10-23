import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import FileModel from '../Model/File';

class File extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel).isRequired,
    findFile: PropTypes.func.isRequired,
    removeCurrentFile: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.findFile(this.props.slug);
  }

  componentWillUnmount() {
    this.props.removeCurrentFile();
  }

  render() {
    const file = this.props.file;

    if (!file.thumbnails.get('image')) {
      return <div />;
    }

    return (
      <div>
        <Helmet title="Foo" />
        <img
          src={file.thumbnails.get('image')}
          alt={file.name}
          style={{ maxWidth: '100%' }}
        />
      </div>
    );
  }
}

export default File;
