import React, { Component } from "react";

class ToDoSingle extends Component {
  state = { isDone: false };

  markAsDone = () => {
    this.setState({ isDone: true });
  };

  render() {
    return (
      <section>
        <h2>
          {this.props.toDoText}
          <button onClick={this.markAsDone}>Mark As Done</button>
          <button>Delete</button>
          <button>Edit</button>{" "}
        </h2>
      </section>
    );
  }
}

export default ToDoSingle;
