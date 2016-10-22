import { connect } from 'react-redux';
import Directory from '../Component/Directory';
import { find } from '../Action/DirectoryAction';

function mapStateToProps(state, ownProps) {
  return {
    directory: state.opium.get('currentDirectory'),
    slug: ownProps.params.directorySlug || '',
  }
};

const mapDispatchToProps = {
  findDirectory: find,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
