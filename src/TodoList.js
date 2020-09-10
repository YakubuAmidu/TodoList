import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  addItem(e) {}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="Enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
