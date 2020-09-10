import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== " ") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
    }
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(e) => (this._inputElement = a)}
              placeholder="Enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
