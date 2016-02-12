const filter = (state = "ALL", action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.status
    default:
      return state
  }
}

export default filter;
