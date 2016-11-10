import React, { Component, PropTypes } from 'react';
import Folder from 'react-icons/lib/ti/folder';
import './Thumbnail.css';

class Thumbnail extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  render() {
    const styles = {};
    if (this.props.image) {
      styles.backgroundImage = `url(${this.props.image})`;
    }

    if (this.props.width) {
      styles.width = this.props.width;
    }

    if (this.props.height) {
      styles.height = this.props.height;
    }


    return (
      <article
        className="Thumbnail"
        style={styles}
      >
        {!this.props.image &&
          <Folder
            className="Thumbnail_FolderPlaceholder"
            size={Math.min(this.props.width, this.props.height)}
          />
        }

        <span className="Thumbnail_Caption">
          {this.props.title}
        </span>
      </article>
    );
  }
}

export default Thumbnail;
