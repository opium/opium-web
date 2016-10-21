import { connect } from 'react-redux';
import Image from '../Component/Image';

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
)(Image);
