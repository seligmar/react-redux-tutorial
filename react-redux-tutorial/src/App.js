import React from 'react'
import './AppCss.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
// import { connect } from 'react-redux'
//

// useSelector lets APP access state; ditto for any other component

function App () {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div>Counter {counter}</div>
      <br></br>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h1>Hidden Gems!</h1> : ''}
    </div>
  )
}

export default App
