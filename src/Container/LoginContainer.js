import { connect } from 'react-redux';
import Login from '../Component/Login';
import { doLogin } from '../Action/LoginAction';

function mapStateToProps(state, ownProps) {
  return {
  }
};

const mapDispatchToProps = {
  doLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
