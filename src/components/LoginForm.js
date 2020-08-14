import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }
   handleUsernameInputChange(event) {
        this.setState({username: event.target.value});
     
      }
     handlePasswordInputChange(event) {
          this.setState({password: event.target.value});
       
        }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleUsernameInputChange}  value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handlePasswordInputChange} value={this.state.password} name="password" type="password" />
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
