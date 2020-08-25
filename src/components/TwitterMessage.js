import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleInput = event => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.message.length}</p>
        <input onChange={event => this.handleInput(event)} type="text" name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
