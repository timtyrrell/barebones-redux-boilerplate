import { connect } from 'react-redux'
import { addTodo, deleteTodo, filterTodos } from '../actions'
import Todos from '../components/Todos'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer;
