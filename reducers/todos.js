const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(null, action)
      ]
    case 'COMPLETE_TODO':
      return state.map((t) => todo(t, action));
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: Date.now(),
        completed: false
      }
    case 'COMPLETE_TODO':
      if(state.id === action.id){
        state.completed = !state.completed;
      }
      return state;
    default:
      return state;
  }
}

export default todos;
