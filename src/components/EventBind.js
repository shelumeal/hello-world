import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Good bye",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler.bind(this)}>Click 1</button>
        <button onClick={() => this.clickHandler()}>Click 2</button>
        <button onClick={this.clickHandler}>Click 3</button>
      </div>
    );
  }
}

export default EventBind;
