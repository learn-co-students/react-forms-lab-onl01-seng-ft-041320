import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {message: ''};
  }

  charactersRemaining = () => {
    return this.props.maxChars - this.state.message.length
  }

  updateMessage = (event) => {
    let message = event.target.value
    this.setState(previousState => {
      return { 
        message
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateMessage} value={this.state.message} type="text" name="message" id="message" />
        <p>Characters Remaining: {this.charactersRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
