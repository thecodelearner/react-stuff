import React, { Component } from "react";
import Hitman from "./Hitman";
import AddHitman from "./AddHitman";

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
        <h2>Confidential - Diana Burnwood</h2>
        <p>Agent 47 alternatives:</p>

        <Hitman hitmans={this.state.hitmans} />

        <AddHitman />
      </div>
    );
  }
}

export default App;
