import React, { Component } from "react";

class Hitman extends Component {
  render() {
    // console.log(this.props);
    const { hitmans } = this.props;

    const hitmanList = hitmans.map((hitman) => {
      return (
        <div className="hitman" key={hitman.id}>
          <div>Name: {hitman.name}</div>
          <div>Age: {hitman.age}</div>
          <div>Alias: {hitman.alias}</div>
          <br />
        </div>
      );
    });

    return <div className="hitman-list">{hitmanList}</div>;
  }
}

export default Hitman;
