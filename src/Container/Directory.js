import { connect } from 'react-redux';
import { Set } from 'immutable';
import Directory from '../Component/Directory';
import { find } from '../Action/DirectoryAction';
import { loadImage } from '../Action/ImageAction';

function mapStateToProps(state, ownProps) {
  const viewportWidth = document.body.clientWidth;
  const loadedImages = state.imageLoader.get('loadedImages') || Set();
  const directory = state.opium.get('currentDirectory');
  const hasBackground = !!(directory && directory.directoryThumbnail);
  const directoryImage = hasBackground && directory.directoryThumbnail.generateCrop(viewportWidth, 400);

  return {
    directory,
    slug: ownProps.params.directorySlug || '',
    hasBackground,
    backgroundLoaded: directory && loadedImages.has(directoryImage),
    backgroundImage: directoryImage,
  }
};

const mapDispatchToProps = {
  findDirectory: find,
  loadImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
