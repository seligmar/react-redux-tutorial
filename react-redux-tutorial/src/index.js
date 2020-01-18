import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import store from './store'
import App from './App'
import { createStore } from 'redux'
import allReducers from './reducers'

const store = createStore(allReducers)

// the provider wraps around the app so that the entire app has access to the store

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)
