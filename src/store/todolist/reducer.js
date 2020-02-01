import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './action'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function visibilityFilter(state = SHOW_ALL, action) {
  console.log('reducer1')  
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  console.log('reducer2')
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function todoApp1(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

export const todoApp = combineReducers({
  visibilityFilter,
  todos
})

function todoApp2(state = initialState, action) {
  // if (typeof state === 'undefined') {
  //   return initialState
  // }
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter }) || {...state }
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, { completed: !todo.completed })
          }
          return todo
        })
      })
    default:
      return state
  }
}

// function