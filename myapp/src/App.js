import React from "react";
import Hitman from "./Hitman";

function App() {
  return (
    <div className="App">
      <h1>My first react app!</h1>
      <p>Welcome!</p>
      <Hitman
        name="sahil"
        parent="prs"
        born="November 26, 1999"
        alias="zeductio"
      />
      <br />
      <Hitman
        name="Marcel"
        parent="Jadon"
        born="November 09, 1967"
        alias="soidstate"
      />
    </div>
  );
}

export default App;
