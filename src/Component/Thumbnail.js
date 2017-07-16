import React, { PureComponent, PropTypes } from 'react';
import Folder from 'react-icons/lib/ti/folder';
import './Thumbnail.css';

class Thumbnail extends PureComponent {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      realImage: null,
    };
  }

  render() {
    const styles = {};
    if (this.props.image) {
      if (!this.state.realImage) {
        window.container.sdk
          .file
        .getFile(this.props.image)
        .then(r => r.blob())
        .then((blob) => {
          this.setState({ realImage: URL.createObjectURL(blob) });
        })
      } else {
        styles.backgroundImage = `url(${this.state.realImage})`;
      }
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

        {this.props.title &&
          <span className="Thumbnail_Caption">
            {this.props.title}
          </span>
        }
      </article>
    );
  }
}

export default Thumbnail;
