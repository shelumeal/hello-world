import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  onClickHandler = () => {
    alert(this.inputRef.current.value);
  };

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.onClickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
