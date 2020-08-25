import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    let userData = this.state.username
    let passwordData = this.state.password

    if (userData !== '' && passwordData !== '') {
      this.props.handleLogin({userData, passwordData})
      this.setState({
        username: '',
        password: ''
      })
    }

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
