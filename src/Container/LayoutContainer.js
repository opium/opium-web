import { connect } from 'react-redux';
import Layout from '../Component/Layout';
import { fetchMe } from '../Action/UserAction';

function mapStateToProps(state, ownProps) {
  return {
    isLogged: !!state.opium.get('me'),
    isFetchingMe: !!state.opium.get('isFetchingMe'),
  }
};

const mapDispatchToProps = {
  fetchMe,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
