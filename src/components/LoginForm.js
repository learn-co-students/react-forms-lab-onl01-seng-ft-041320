import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    // this.handleLogin = this.login.bind(this)
    this.state = {
      username: "username",
      password: "password",
      handleLogin: props,
      };
    }
  

  // login = (event) => {
    
  //   console.log(event)
  //   // console.log(this.state.username)
  //   // console.log(this.state.password)
  // }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "")
    this.props.handleLogin(this.state.username, this.state.password)
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
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
