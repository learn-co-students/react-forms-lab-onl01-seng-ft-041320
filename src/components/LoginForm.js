import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      submittedData: []
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let username = this.state.username
    let password = this.state.password
    debugger
    if (username !== "" && password !== "") {
      this.props.onSubmit({username, password})
      this.setState({
        username: '',
        password: ''
      });
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username} 
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button onSubmit={this.handleSubmit} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
