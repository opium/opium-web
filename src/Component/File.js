import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import FileModel from '../Model/File';
import './File.css';
import ChevronLeft from 'react-icons/lib/ti/chevron-left';
import ChevronRight from 'react-icons/lib/ti/chevron-right';

const BackLink = ({file, ...props}) => {
  if (!file.parent) {
    return null;
  }

  return (
    <Link to={`/${file.parent.slug}`} {...props}>
      <ChevronLeft /> {file.parent.name}
    </Link>
  );
};

const PrevLink = ({file}) => {
  if (!file.previous) {
    return null;
  }

  return (
    <Link className="Prev" to={`/${file.parent.slug}/${file.previous.slug}`}>
      <div className="Overlay">
        <ChevronLeft />
      </div>
    </Link>
  );
};

const NextLink = ({file}) => {
  if (!file.next) {
    return null;
  }

  return (
    <Link className="Next" to={`/${file.parent.slug}/${file.next.slug}`}>
      <div className="Overlay">
        <ChevronRight />
      </div>
    </Link>
  );
};

const Exif = ({file}) =>
  <table className="Table">
    <tbody>
      <tr>
        <th>Camera</th>
        <td>
          {file.exif.get('Make')}
          {' '}
          {file.exif.get('Model')}
        </td>
      </tr>
      <tr>
        <th>Date</th>
        <td>
          {file.exif.get('DateTime')}
        </td>
      </tr>
      <tr>
        <th>Size</th>
        <td>
          {file.exif.get('ExifImageWidth')}
          x
          {file.exif.get('ExifImageLength')}
        </td>
      </tr>
    </tbody>
  </table>
;

class File extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(FileModel).isRequired,
    isFetchingFile: PropTypes.bool.isRequired,
    findFile: PropTypes.func.isRequired,
    removeCurrentFile: PropTypes.func.isRequired,
    viewportHeight: PropTypes.number.isRequired,
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
        <Helmet title={file.name} />

        <header className="FileHeader">
          <div>
            <BackLink file={file} className="BackToAlbum" />
          </div>
          <h1 className="FileTitle">
            {file.name}
          </h1>
        </header>

        <div className="MainContainer">
          <div
            className="ImageContainer"
            style={{ height: `${this.props.viewportHeight - 80}px` }}
          >
            <PrevLink file={file} />
            <NextLink file={file} />

            <img
              src={file.thumbnails.get('image')}
              alt={file.name}
              className="Image"
            />
          </div>
        </div>

        <Exif file={file} />
      </div>
    );
  }
}

export default File;
