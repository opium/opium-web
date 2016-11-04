import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Set } from 'immutable';
import FileComponent from '../Component/File';
import File from '../Model/File';
import { find, removeCurrent, updateFilePosition } from '../Action/FileAction';
import { loadImage } from '../Action/ImageAction';

function mapStateToProps(state, ownProps) {
  const file = state.opium.get('currentFile') || new File({});
  const loadedImages = state.imageLoader.get('loadedImages') || Set();

  return {
    file,
    isFetchingFile: !!state.opium.get('isFetchingFile'),
    isLoadedImage: loadedImages.has(file.thumbnails.get('image')),
    slug: ownProps.params.fileSlug || '',
    viewportHeight: document.documentElement.clientHeight,
  }
};

const mapDispatchToProps = {
  findFile: find,
  removeCurrentFile: removeCurrent,
  pushLocation: push,
  loadImage,
  updateFilePosition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileComponent);
