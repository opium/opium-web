import React, { Component } from 'react';

class Login extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="login"
          onChange={this.handleChangeLogin}
          value={this.state.login}
        />
        <input
          type="text"
          placeholder="password"
          onChange={this.handleChangePassword}
          value={this.state.password}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
