import { connect } from 'react-redux';
import File from '../Component/File';

function mapStateToProps(state) {
  return {
    // directory: state.opium.get('currentDirectory'),
  }
};

const mapDispatchToProps = {
  // findDirectory: find,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
