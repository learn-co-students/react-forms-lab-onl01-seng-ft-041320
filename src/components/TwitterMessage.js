import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleInput = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleInput(event)} value={this.state.text}/>
        <p>{this.props.maxChars - this.state.text.length}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
