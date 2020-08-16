import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handleLogin: this.props.handleLogin,
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    const input = e.target.value
    if (e.target.id === "username") {
      this.setState({
        username: input,
      })
    } else if (e.target.id === "password") {
      this.setState({
        password: input
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      return (this.state.handleLogin(this.state.username, this.state.password))
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
