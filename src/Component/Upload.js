import React, { Component, PropTypes } from 'react';

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
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} alt="preview" />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={this.handleSubmit}>
          <input
            className="fileInput"
            type="file"
            onChange={this.handleImageChange}
          />
          <button className="submitButton" type="submit">
            Upload Image
          </button>
        </form>

        <div className="imgPreview">
          {imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
