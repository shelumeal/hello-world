import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sharon",
    };

    console.log("Life cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Life cycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Life cycle B componentDidUpdate");
  }

  render() {
    console.log("Life cycle B render");
    return <div>Life cycle B</div>;
  }
}

export default LifeCycleB;
