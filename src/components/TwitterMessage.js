import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: 280,
    };
  }

handleChange = event => {
  this.setState({
    maxChars: event.target.value
  })
}
printMessage = () =>{
  console.log(this.state.maxChars)
  let value = isNaN(this.state.maxChars);
  console.log(value)
  if (this.state.maxChars.length)
  {return 280 - this.state.maxChars.length }
  else {
    return this.state.maxChars
  }
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event) } value={this.state.maxChars}/>
        <p>Remaining Characters: {this.state.maxChars}</p>
        {this.printMessage()}
      </div>
    );
  }
}

export default TwitterMessage;
