import React, { Component } from 'react';
import TodosList from './TodosList'
import TodosFilter from './TodosFilter'

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  _addTodo = (e) => {
    if(e.keyCode === 13) {
      this.props.addTodo(e.target.value);
      this.refs.todoInput.value = "";
    }
  };

  render() {
    const {todos, deleteTodo, completeTodo, updateTodosFilter} = this.props;
    return (
      <div>
        <h1>todos</h1>
        <input type="text" placeholder="What needs to be done?" ref="todoInput"
          onKeyUp={this._addTodo}
        />
        <TodosList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        <TodosFilter updateTodosFilter={updateTodosFilter} />
      </div>
    );
  }
}

export default Todos;
