import React, { useState, useEffect, useContext } from 'react'

function FunState() {
  const [count, setCount] = useState(0)

  return (
    <>
      count: {count}
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}></button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}></button>
    </>
  )
}

function FunEffect(props) {
  useEffect(() => {
    const subscription = props.source.subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [props.source])
}

function FunCOntext(props) {
  const context = useContext(Context)

}

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function Counter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, { count: initialState }, { type: 'reset', payload: initialCount })
  return (
    <>
      Count: { state.count }
      <button onClick={() => dispatch({ type: 'reset'})}></button>
      <button onClick={() => dispatch({ type: 'increment '})}></button>
      <button onClick={() => dispatch({ type: 'decrement' })}></button>
    </>
  )
}

function TextInputWithFocusButton() {
  const inputEl = useref(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputEl}/>
      <button onClick={onButtonClick}></button>
    </div>
  )
}
