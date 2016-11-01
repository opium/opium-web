import { connect } from 'react-redux';
import Upload from '../Component/Upload';
import { uploadFile } from '../Action/DirectoryAction';

function mapStateToProps(state, ownProps) {
  return {
    slug: ownProps.params.directorySlug || '',
  }
};

const mapDispatchToProps = {
  uploadImage: uploadFile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
