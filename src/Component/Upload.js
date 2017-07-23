import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Upload.css';

class ImageUpload extends Component {
  static propTypes = {
    uploadImage: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadImage(this.props.slug, this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    }

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;

    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img className="Upload__PreviewImage" src={imagePreviewUrl} alt="preview" />);
    } else {
      imagePreview = 'Please select an Image for Preview';
    }

    return (
      <div className="Upload__Container">
        <form
          onSubmit={this.handleSubmit}
          className="Upload__Form"
        >
          <input
            type="file"
            onChange={this.handleImageChange}
          />
          <div>
            <Link to={`/${this.props.slug}/`}>
              Back
            </Link>

            <button type="submit" className="Upload__Link">
              Upload Image
            </button>
          </div>
        </form>

        <div className="Upload__Preview">
          {imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
