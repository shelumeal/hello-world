import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }

  hanldeUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  hanldeCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName}, ${this.state.comment}, ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User name</label>
            <input
              type="text"
              value={userName}
              onChange={this.hanldeUserNameChange}
            ></input>
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comment}
              onChange={this.hanldeCommentChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
