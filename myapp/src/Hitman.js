import React, { Component } from "react";

export class Hitman extends Component {
  render() {
    // console.log(this.props);
    const { name, parent, born, alias } = this.props;

    return (
      <div className="hitman">
        <div>Name: {name}</div>
        <div>Parent: {parent}</div>
        <div>Born: {born}</div>
        <div>Alias: {alias}</div>
      </div>
    );
  }
}

export default Hitman;
