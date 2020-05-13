import React, { Component } from "react";
import Hitman from "./Hitman";

class App extends Component {
  state = {
    hitmans: [
      { id: 1, name: "Lizzie", age: 34, alias: "XSS" },
      { id: 2, name: "Judd", age: 25, alias: "JSON" },
      { id: 3, name: "Alexzander", age: 19, alias: "HTT/ML" },
      { id: 4, name: "Maverick", age: 17, alias: "IMAPOP3" },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>

        <Hitman hitmans={this.state.hitmans} />
      </div>
    );
  }
}

export default App;
