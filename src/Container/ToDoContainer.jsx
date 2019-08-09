import React, { Component } from "react";
// import styles from "./ToDoContainer.scss";

class ToDoContainer extends Component {
  state = { inputValue: "", toDoArray: [] };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  submitToDo = event => {
    event.preventDefault();
    let inputArray = [this.state.inputValue];
    console.log("barry");
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputValue]
    });
  };

  render() {
    return (
      <section>
        <h1>To-Do List</h1>
        <form>
          <label>
            To Do
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.submitToDo} />
        </form>
        <h1>{this.toDoArray}</h1>
      </section>
    );
  }
}

export default ToDoContainer;
