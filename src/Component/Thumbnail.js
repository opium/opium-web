import React, { Component, PropTypes } from 'react';
import './Thumbnail.css';

class Thumbnail extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <article
        className="Thumbnail"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <span className="Caption">
          {this.props.title}
        </span>
      </article>
    );
  }
}

export default Thumbnail;
