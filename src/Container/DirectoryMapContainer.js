import { connect } from 'react-redux';
import DirectoryMap from '../Component/DirectoryMap';
import { find } from '../Action/DirectoryAction';

function mapStateToProps(state, ownProps) {
  const directory = state.opium.get('currentDirectory');

  return {
    directory,
    slug: ownProps.params.directorySlug || '',
    mapHeight: document.documentElement.clientHeight,
  }
};

const mapDispatchToProps = {
  findDirectory: find,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryMap);
