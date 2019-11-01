import { useState } from "react"

function todosReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completes: false
      }]
    default:
      return state
  }
}

function usereducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
    const nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}


function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  function handleAddClick(text) {
    dispatch({ type: 'add', text })
  }
}
