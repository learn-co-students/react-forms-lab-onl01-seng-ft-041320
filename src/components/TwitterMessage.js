import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleTextChange = (e) => {
    let message = e.target.value
    this.setState(previousState => {
      return {
        message: message,
        maxChars: previousState.maxChars - 1,
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleTextChange} type="text" name="message" id="message" value={this.state.message}/>
          <p>{this.state.maxChars} remaining</p>
      </div>
    )
  }
}

export default TwitterMessage;
