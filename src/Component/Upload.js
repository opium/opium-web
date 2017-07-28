import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Upload.css';

function fileListToList(fileList) {
  const outList = [];
  for (let i = 0; i < fileList.length; i++) {
    outList.push(fileList[i]);
  }

  return outList;
}

class ImageUpload extends Component {
  static propTypes = {
    uploadImages: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

    this.state = {
      files: [],
      imagesPreviewUrl: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadImages(this.props.slug, fileListToList(this.state.files));
  }

  handleImageChange(e) {
    e.preventDefault();

    let files = e.target.files;

    this.setState({
      files,
    });

    fileListToList(files)
      .forEach(file => {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.setState((prevState) => {
            const imagesPreviewUrl = prevState.imagesPreviewUrl;
            imagesPreviewUrl.push(reader.result);

            return {
              imagesPreviewUrl,
            };
          });
        }
        reader.readAsDataURL(file);
      })
    ;
  }

  render() {
    const { imagesPreviewUrl } = this.state;

    let imagePreview = null;
    if (imagesPreviewUrl.length > 0) {
      imagePreview = (<div>
        {imagesPreviewUrl.map(imagePreviewUrl =>
          <img key={imagePreviewUrl} className="Upload__PreviewImage" src={imagePreviewUrl} alt="preview" />
        )}
      </div>);
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
            multiple
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
          <h2>Preview</h2>
          {imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
