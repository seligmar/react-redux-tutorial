// type is the convention used for naming the key of the object returned by an action;
// the convention is also to capitalize the value of the object returned by an action

const increment = () => {
  return { type: 'INCREMENT' }
}

const decrement = () => {
  return { type: 'DECREMENT' }
}
