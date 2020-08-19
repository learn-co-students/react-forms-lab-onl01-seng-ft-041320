import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charsRemaining: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charsRemaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <label>Chars left: {this.state.charsRemaining}</label>
      </div>
    );
  }
}

export default TwitterMessage;
