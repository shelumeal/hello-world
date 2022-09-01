import React, { Component } from "react";

class HoverCounterTwo extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   increamentCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hover {count} times</h1>
      </div>
    );
  }
}

export default HoverCounterTwo;
