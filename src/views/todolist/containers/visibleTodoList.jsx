import { connect } from 'react-redux'
import { toggleTodo } from '../../../store/action'
import TodoList from '../todoList'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateProps = state => {
  console.log(state, 1111)
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchProps = dispatch => {
  return {
    onTodoClick: id  => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateProps, mapDispatchProps)(TodoList)

export default VisibleTodoList