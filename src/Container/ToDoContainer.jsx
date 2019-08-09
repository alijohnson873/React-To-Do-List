import React, { Component } from "react";
// import styles from "./ToDoContainer.scss";
import ToDoSingle from "../components/ToDoitem";

class ToDoContainer extends Component {
  state = { inputValue: "", toDoArray: [] };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  submitToDo = event => {
    event.preventDefault();

    console.log("barry");
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputValue],
      inputValue: ""
    });
  };

  render() {
    return (
      <section>
        <h1>To-Do List</h1>
        <form>
          <label>
            To Do
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.submitToDo} />
        </form>

        {this.state.toDoArray.map((toDoSingle, index) => (
          <ToDoSingle toDoText={toDoSingle} key={index} />
        ))}
      </section>
    );
  }
}

export default ToDoContainer;
