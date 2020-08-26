import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      msg: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      msg: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.msg} />
        {this.state.remainingChars} characters remaining
      </div>
    );
  }
}

export default TwitterMessage;
