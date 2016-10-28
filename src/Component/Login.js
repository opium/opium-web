import React, { Component, PropTypes } from 'react';
import './Login.css';

class Login extends Component {
  static propTypes = {
    doLogin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      login: '',
      password: '',
    };
  }

  handleChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.doLogin({
      login: this.state.login,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="Login__Container">
        <form onSubmit={this.handleSubmit} className="Login">
          <div>
            Demo credentials are:
              <ul>
                <li>login: "test"</li>
                <li>password: "test"</li>
              </ul>
          </div>

          <div className="Login__InputContainer">
            <label>
              <div>Login</div>
              <input
                type="text"
                placeholder="login"
                onChange={this.handleChangeLogin}
                value={this.state.login}
                className="Login__Input"
              />
            </label>
          </div>
          <div className="Login__InputContainer">
            <label>
              <div>Password</div>
              <input
                type="text"
                placeholder="password"
                onChange={this.handleChangePassword}
                value={this.state.password}
                className="Login__Input"
              />
            </label>
          </div>

          <button
            type="submit"
            className="Login__Input Login__Input--Submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
