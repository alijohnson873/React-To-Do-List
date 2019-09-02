import React, { Component } from "react";
import styles from "./ToDoContainer.module.scss";
import ToDoSingle from "../components/ToDoitem";
import { firestore } from "../firebase";

class ToDoContainer extends Component {
  state = {
    inputValue: "",
    editValue: "",
    searchText: "",
    toDoArray: [],
    filteredArray: []
  };

  //firebase to be set up later below
  componentDidMount() {
    firestore
      .collection("Test User")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data().CompletedTasks);
          // console.log(doc.data());
        });
      });

    firestore
      .collection("Test User")
      .doc("LA")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
  }

  handleChangeNewItem = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChangeSearch = event => {
    let searchText = event.target.value;
    console.log(searchText);
  };

  submitSearch = event => {
    event.preventDefault();
    console.log(this.state.filteredArray);
  };

  submitToDo = event => {
    event.preventDefault();
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.inputValue],
      inputValue: ""
    });
  };

  handleEditChange = event => {
    this.setState({ editValue: event.target.value });
    console.log(this.state.editValue);
  };

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

          {/* <label>Search</label>
          <input
            type="text"
            //   value={this.state.inputValue}
            onChange={this.handleChangeSearch}
          /> */}
          {/* <input type="submit" value="Search" onClick={this.submitSearch} /> */}
        </form>

        <section className={styles.toDoItemsWrapper}>
          {this.state.toDoArray.map((item, index) => (
            <ToDoSingle
              item={item}
              key={item}
              handleDelete={this.handleDelete}
              handleEditSubmit={this.handleEditSubmit}
              handleEditChange={this.handleEditChange}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default ToDoContainer;
