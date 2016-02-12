import React, { Component } from 'react'
import TodosList from './TodosList'
import TodosFilter from './TodosFilter'

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  _add = (e) => {
    if(e.keyCode === 13) {
      this.props.addTodo(e.target.value);
      this.refs.todoInput.value = '';
    }
  };

  render() {
    const { addTodo, todos, deleteTodo} = this.props;
    return(
      <div>
        <input type="text" placeholder="Add todo:"
          onKeyUp={this._add}
          ref='todoInput'
        />
        <TodosList todos={todos} deleteTodo={deleteTodo} />
        <TodosFilter />
      </div>
    );
  }
}

export default Todos;
