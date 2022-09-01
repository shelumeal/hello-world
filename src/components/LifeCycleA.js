import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sharon",
    };

    console.log("Life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Life cycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Life cycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Changing the state",
    });
  };

  render() {
    console.log("Life cycle A render");
    return (
      <div>
        Life cycle A<button onClick={this.changeState}>Change state</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
