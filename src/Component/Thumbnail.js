import React, { Component, PropTypes } from 'react';
import Folder from 'react-icons/lib/ti/folder';
import './Thumbnail.css';

class Thumbnail extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
  }

  render() {
    const styles = {};
    if (this.props.image) {
      styles.backgroundImage = `url(${this.props.image})`;
    }


    return (
      <article
        className="Thumbnail"
        style={styles}
      >
        {!this.props.image && <Folder className="FolderPlaceholder" size={200} />}

        <span className="Caption">
          {this.props.title}
        </span>
      </article>
    );
  }
}

export default Thumbnail;
