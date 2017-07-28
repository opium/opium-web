import { connect } from 'react-redux';
import Upload from '../Component/Upload';
import { uploadFiles } from '../Action/DirectoryAction';

function mapStateToProps(state, ownProps) {
  return {
    slug: ownProps.match.params.directorySlug || '',
  }
};

const mapDispatchToProps = {
  uploadImages: uploadFiles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
