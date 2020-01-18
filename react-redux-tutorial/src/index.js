import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from redux 
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

let store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root')
)
