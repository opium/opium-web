import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import FileModel from '../Model/File';
import './File.css';

const BackLink = ({file, ...props}) => {
  if (!file.parent) {
    return null;
  }

  return (
    <Link to={`/${file.parent.slug}`} {...props}>
      &lt; {file.parent.name}
    </Link>
  );
};

const PrevLink = ({file}) => {
  if (!file.previous) {
    return null;
  }

  return (
    <div className="Prev">
      <Link to={`/${file.parent.slug}/${file.previous.slug}`}>
        &lt;
      </Link>
    </div>
  );
};

const NextLink = ({file}) => {
  if (!file.next) {
    return null;
  }

  return (
    <div className="Next">
      <Link to={`/${file.parent.slug}/${file.next.slug}`}>
        &gt;
      </Link>
    </div>
  );
};


class File extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel).isRequired,
    isFetchingFile: PropTypes.bool.isRequired,
    findFile: PropTypes.func.isRequired,
    removeCurrentFile: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.findFile(this.props.slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findFile(this.props.slug);
    }
  }

  componentWillUnmount() {
    this.props.removeCurrentFile();
  }

  render() {
    const file = this.props.file;

    if (!file.thumbnails.get('image') || this.props.isFetchingFile) {
      return <div />;
    }

    return (
      <div>
        <h1>
          <BackLink file={file} className="Back" />
          {file.name}
        </h1>

        <Helmet title="Foo" />

        <div className="PrevNextContainer">
          <img
            src={file.thumbnails.get('image')}
            alt={file.name}
            style={{ display: 'block', maxWidth: '100%' }}
          />

          <PrevLink file={file} />
          <NextLink file={file} />
        </div>
      </div>
    );
  }
}

export default File;
