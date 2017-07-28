import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Upload.css';

function fileListToList(fileList) {
  const outList = [];
  for (let i = 0; i < fileList.length; i++) {
    outList.push(fileList[i]);
  }

  return outList;
}

function ImagePreview({ imagesPreviewUrl }) {
  if (imagesPreviewUrl.length <= 0) {
    return (<div>
      Please select an Image for Preview
    </div>);
  }

  return (<div className="Upload__Preview">
    {imagesPreviewUrl.map(imagePreviewUrl =>
      <img key={imagePreviewUrl} className="Upload__PreviewImage" src={imagePreviewUrl} alt="preview" />
    )}
  </div>);
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
    this.props.uploadImages(this.props.slug, this.state.files);
  }

  handleImageChange(e) {
    e.preventDefault();

    let files = fileListToList(e.target.files);

    this.setState(prevState => ({
      files: prevState.files.concat(files),
    }));

    files
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
            <Button tag={Link}  to={`/${this.props.slug}/`} secondary>
              Back
            </Button>

            <Button type="submit" primary>
              Upload Image
            </Button>
          </div>
        </form>

        <h2>Preview</h2>
        <ImagePreview imagesPreviewUrl={imagesPreviewUrl} />
      </div>
    )
  }
}

export default ImageUpload;
