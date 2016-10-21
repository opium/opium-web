import { connect } from 'react-redux';
import Directory from '../Component/Directory';
import { find } from '../Action/DirectoryAction';

function mapStateToProps(state) {
  return {
    directory: state.opium.get('currentDirectory'),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    findDirectory: (slug) => dispatch(find(slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);