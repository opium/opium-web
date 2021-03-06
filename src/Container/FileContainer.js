import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Set } from 'immutable';
import FileComponent from '../Component/File';
import { find, removeCurrent, updateFilePosition } from '../Action/FileAction';
import { updateDirectoryCover } from '../Action/DirectoryAction';
import { loadImage } from '../Action/ImageAction';

function mapStateToProps(state, ownProps) {
  const file = state.opium.get('currentFile');
  const loadedImages = state.imageLoader.get('loadedImages') || Set();

  return {
    file,
    isFetchingFile: !!state.opium.get('isFetchingFile'),
    localFile: file && loadedImages.get(file.thumbnails.get('image')),
    slug: ownProps.match.params.fileSlug || '',
    viewportHeight: document.documentElement.clientHeight,
    canEdit: state.opium.get('me') ? state.opium.get('me').isAdmin() : false,
    isDirectoryCoverChanging: !!state.opium.get('isFetchingDirectory'),
  }
};

const mapDispatchToProps = {
  findFile: find,
  removeCurrentFile: removeCurrent,
  pushLocation: push,
  loadImage,
  updateFilePosition,
  updateDirectoryCover,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileComponent);
