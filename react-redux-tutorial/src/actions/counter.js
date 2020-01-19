// reducers take care of all related actions- in this case, related to the counter
// reducers take two variables- initial state and action
// switch as are used for longer/more complex if/else statements
// always return default: return state
// redux dev tools extension is very nifty- just do a google search for it :)

const increment = () => {
  return { type: 'INCREMENT' }
}

const decrement = () => {
  return { type: 'DECREMENT' }
}
