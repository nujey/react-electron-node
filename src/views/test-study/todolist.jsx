import React from 'react'
// import Todo from '../todolist/todo'
import Footer from '../todolist/footer'
import AddTodo from '../todolist/containers/addTodo'
import VisibilityTodoList from '../todolist/containers/visibleTodoList'

class Study extends React.Component {
  render() {
    return (
      <div>
        <h2>todo-list</h2>
        <AddTodo />
        <VisibilityTodoList />
        <Footer />
      </div>
    )
  }
}

export default Study