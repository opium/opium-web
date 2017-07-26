import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import Folder from 'react-icons/lib/ti/folder';
import FileWithToken from '../Tool/FileWithToken';
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

    this._isMounted = false;

    this.state = {
      realImage: null,
    };
  }

  componentWillMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const styles = {};
    if (this.props.image) {
      if (!this.state.realImage) {
        FileWithToken(this.props.image)
          .then((url) => {
            if (this._isMounted) {
              this.setState({ realImage: url });
            }
          })
        ;
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

function withLazyload(Component) {
  return (props) => (
    <LazyLoad height={props.height} offset={300} once resize>
      <Component {...props} />
    </LazyLoad>
  )
}

export default withLazyload(Thumbnail);
