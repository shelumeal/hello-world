import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogggedIn: true,
    };
  }

  render() {
    return this.state.isLogggedIn ? (
      <div> Welcome Bob</div>
    ) : (
      <div> Welcome Guest</div>
    );

    // let message;
    // if (this.state.isLogggedIn) {
    //   message = <div>Welcome bob</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // if (this.state.isLogggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Bob</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }
  }
}

export default UserGreeting;
