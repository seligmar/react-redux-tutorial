// this is the file where are the reducers are imported and combined
import isLogged from './isLogged'
import counter from './counter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  // these can be given any name
  // if the reducer is given the same name as the imported name, can put
  counter,
  // instead of
  // counter: counter
  isLogged: isLogged
})

export default allReducers
