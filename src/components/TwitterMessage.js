import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    }

  handleSubmit = event => {
    event.preventDefault()
    this.props.message(this.state)
  }


  render() {
    let charNumber= this.props.maxChars - this.state.message.length;

    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={this.handleChange}
        value={this.state.message}
        />{charNumber}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      </form>
    );
  }
}

export default TwitterMessage;
