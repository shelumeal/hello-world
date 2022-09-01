import React, { Component } from "react";
import WtihCounter from "./WithCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // increamentCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    // const { count } = this.state;
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default WtihCounter(ClickCounter);
