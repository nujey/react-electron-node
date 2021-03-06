
let nextTodoId = 0
/*  action类型 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* 其他的变量 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action创建函数
 */
export function addTodo(text) {
  return { id: nextTodoId++, type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter}
}

