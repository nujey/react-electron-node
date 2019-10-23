import React from 'react'
import { useState, useEffect } from 'react'

function HooksExample() {
  const [count, setCount] = useState(0)

  // 声明多个state(状态)变量
  const [age, setAge] = useState(42)
  const [fruir, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  useEffect(() => {
    console.log(1111)
  })
  return(
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }
  const ChatAPI = null
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })
  if(isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'onLine' : 'offLine'
}


export{ HooksExample, FriendStatus }
