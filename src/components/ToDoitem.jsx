import React, { Component } from "react";
import styles from "./ToDoItem.module.scss";

class ToDoSingle extends Component {
  state = { isDone: false, isDeleted: false };

  markAsDone = () => {
    this.setState({ isDone: !this.state.isDone });
  };

  deleteItem = () => {
    this.setState({ isDeleted: !this.state.isDeleted });
  };

  render() {
    const clickedDone = this.state.isDone ? styles.markedAsDone : null;
    return (
      <section>
        <h2 className={clickedDone}>{this.props.toDoText}</h2>
        <button onClick={this.markAsDone}>Mark As Done</button>
        <button>Delete</button>
        <button>Edit</button>{" "}
      </section>
    );
  }
}

export default ToDoSingle;
