import { connect } from 'react-redux';
import Layout from '../Component/Layout';
import { fetchMe } from '../Action/UserAction';

function mapStateToProps(state, ownProps) {
  return {
    isLogged: !!state.opium.get('me'),
  }
};

const mapDispatchToProps = {
  fetchMe,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
