import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FileComponent from '../Component/File';
import File from '../Model/File';
import { find, removeCurrent } from '../Action/FileAction';

function mapStateToProps(state, ownProps) {
  return {
    file: state.opium.get('currentFile') || new File({}),
    isFetchingFile: !!state.opium.get('isFetchingFile'),
    slug: ownProps.params.fileSlug || '',
    viewportHeight: document.documentElement.clientHeight,
  }
};

const mapDispatchToProps = {
  findFile: find,
  removeCurrentFile: removeCurrent,
  pushLocation: push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileComponent);
