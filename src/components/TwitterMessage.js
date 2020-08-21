import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageInput = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const remainingCharacters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        value={this.state.message} 
        name="message" 
        id="message" 
        onChange={this.handleMessageInput} 
        />
      <p>Remaining Characters: {remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
