import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    let message = e.target.value;
    this.setState(prevState => {
      return {
        maxChars: prevState.maxChars - 1,
        message: message
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>{this.state.maxChars} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
