import React, { Component } from "react";
import FrInputRef from "./FrInputRef";

class FrParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FrInputRef ref={this.inputRef}></FrInputRef>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FrParentInput;
