import React, { Component } from "react";

class AddHitman extends Component {
  state = {
    name: null,
    age: null,
    alias: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange}></input>

          <label htmlFor="age">Age: </label>
          <input type="text" id="age" onChange={this.handleChange}></input>

          <label htmlFor="alias">Alias: </label>
          <input type="text" id="alias" onChange={this.handleChange}></input>

          <button>Add Hitman</button>
        </form>
      </div>
    );
  }
}

export default AddHitman;
