import React from 'react'
import './AppCss.css'
import { useSelector } from 'react-redux'
// import { connect } from 'react-redux'
//
class App extends React.Component {
  render () {
    // useSelector lets APP access state; ditto for any other component
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    return (
      <div className='App'>
        <div>Counter {counter}</div>
        <button>+</button>
        <button>-</button>
        {isLogged ? <h1>Hidden Gems!</h1> : ''}
      </div>
    )
  }
}

export default App
