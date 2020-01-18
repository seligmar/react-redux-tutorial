// reducers take care of all related actions- in this case, related to the counter
// reducers take two variables- initial state and action
// switch as are used for longer/more complex if/else statements

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      if (state > 0) return state - 1
    default:
      return state
  }
}

export default counterReducer
