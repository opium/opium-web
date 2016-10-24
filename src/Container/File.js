import { connect } from 'react-redux';
import FileComponent from '../Component/File';
import File from '../Model/File';
import { find, removeCurrent } from '../Action/FileAction';

function mapStateToProps(state, ownProps) {
  return {
    file: state.opium.get('currentFile') || new File({}),
    isFetchingFile: !!state.opium.get('isFetchingFile'),
    slug: ownProps.params.fileSlug || '',
  }
};

const mapDispatchToProps = {
  findFile: find,
  removeCurrentFile: removeCurrent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileComponent);
