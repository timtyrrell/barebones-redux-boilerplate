import { connect } from 'react-redux'
import { addTodo, deleteTodo, completeTodo } from '../actions/index'
import { updateTodosFilter } from '../actions/filters'
import Todos from '../components/Todos'

const visibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'COMPLETE':
      return todos.filter(t => t.completed);
    case 'NOT COMPLETE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }

}

const mapStateToProps = (state) => {
  return {
    todos: visibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    completeTodo: (id) => {
      dispatch(completeTodo(id))
    },
    updateTodosFilter: (text) => {
      dispatch(updateTodosFilter(text))
    }
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer;
