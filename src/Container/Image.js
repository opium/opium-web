import { connect } from 'react-redux';
import Image from '../Component/Image';

function mapStateToProps(state) {
  return {
    // directory: state.opium.get('currentDirectory'),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    // findDirectory: () => { dispatch(find()); },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
