const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(null, action)
      ]
    case 'DELETE_TODO':
      return state.filter((todo) => action.id != todo.id);
    default:
      return state
  }
}

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: Date.now()
      }
    default:
      return state
  }
}

export default todos;
