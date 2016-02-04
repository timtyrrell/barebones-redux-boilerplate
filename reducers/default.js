const defaultSomething = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_THING':
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

export default defaultSomething;
