import React, { Component } from "react";
// import styles from "./ToDoContainer.scss";
import ToDoSingle from "../components/ToDoitem";

class ToDoContainer extends Component {
  state = {
    inputValue: "",
    editValue: "",
    searchValue: "",
    toDoArray: [],
    filteredToDoArray: []
  };

  handleChangeNewItem = event => {
    this.setState({ inputValue: event.target.value });
    //  console.log(event.target.value);
  };

  handleChangeSearch = event => {
    this.setState({ searchValue: event.target.value });
    console.log(this.state.searchValue);
  };

  submitToDo = event => {
    event.preventDefault();
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputValue],
      inputValue: ""
    });
  };

  submitSearch = event => {
    event.preventDefault();

    console.log(this.state.inputValue);
  };

  handleEditChange = event => {
    // event.preventDefault();
    this.setState({ editValue: event.target.value });
    console.log(this.state.editValue);
  };

  //can I edit an item in an array
  handleEditSubmit = itemToEdit => {
    let editArr = this.state.toDoArray.map(item => {
      if (item === itemToEdit) {
        return this.state.editValue;
      } else {
        return item;
      }
    });
    this.setState({ toDoArray: editArr });
  };

  handleDelete = itemToBeDeleted => {
    let newArr = this.state.toDoArray.filter(item => item !== itemToBeDeleted);
    this.setState({ toDoArray: newArr });
  };

  render() {
    return (
      <section>
        <h1>To-Do List</h1>
        <form>
          <label>Add Item </label>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChangeNewItem}
          />
          <input type="submit" value="Submit" onClick={this.submitToDo} />

          <label>Search</label>
          <input
            type="text"
            //   value={this.state.inputValue}
            onChange={this.handleChangeSearch}
          />
          <input type="submit" value="Search" onClick={this.submitSearch} />
        </form>

        {this.state.toDoArray.map((item, index) => (
          <ToDoSingle
            item={item}
            key={index}
            handleDelete={this.handleDelete}
            handleEditSubmit={this.handleEditSubmit}
            handleEditChange={this.handleEditChange}
          />
        ))}
      </section>
    );
  }
}

export default ToDoContainer;
