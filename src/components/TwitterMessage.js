import React from "react";
// import { verifyAndRestore } from "sinon";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: this.props.maxChars
    };
  }

  handleMessageChange = (event) => {
    let message = event.target.value
    this.setState(previousState => {
      return { 
        maxChars: previousState.maxChars - 1,
        message: message
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={event => this.handleMessageChange(event)} 
        />
        <p>{this.state.maxChars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
