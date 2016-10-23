import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import FileModel from '../Model/File';

const BackLink = ({file}) => {
  if (!file.parent) {
    return null;
  }

  return (
    <Link to={`/${file.parent.slug}`}>
      {file.parent.name}
    </Link>
  );
};

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
        <h1>
          <BackLink file={file} />
          {file.name}
        </h1>

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
