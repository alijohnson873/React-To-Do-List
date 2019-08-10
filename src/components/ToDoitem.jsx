import React, { Component } from "react";
import styles from "./ToDoItem.module.scss";

class ToDoSingle extends Component {
  state = { isDone: false, isEdit: false };

  markAsDone = () => {
    this.setState({ isDone: !this.state.isDone });
  };

  markToEdit = () => {
    this.setState({ isEdit: !this.state.isDone });
  };

  //   deleteItem = () => {
  //     this.setState({ isDeleted: !this.state.isDeleted });
  //   };

  render() {
    const clickedDone = this.state.isDone ? styles.markedAsDone : null;
    const clickedEdit = this.state.isEdit ? null : styles.editForm;
    return (
      <section>
        <h2 className={clickedDone}>{this.props.item}</h2>
        <form className={clickedEdit}>
          <input type="text" onChange={this.props.handleEditChange} />
          <input
            type="submit"
            value="Submit"
            onClick={() => this.props.handleEditSubmit(this.props.item)}
          />
        </form>
        <button onClick={this.markAsDone}>Mark As Done</button>
        <button onClick={() => this.props.handleDelete(this.props.item)}>
          Delete
        </button>
        <button onClick={this.markToEdit}>Edit</button>{" "}
      </section>
    );
  }
}

export default ToDoSingle;
