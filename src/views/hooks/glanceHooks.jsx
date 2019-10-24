import React from 'react'
import { useState, useEffect } from 'react'

function HooksExample() {
  // 声明一个state状态变量 useState 提供和使用了在类中this.state完全相同功能的新方法
  // 当函数退出的时候 变量就会销毁 但是React会保留state状态变量
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

function FriendStatus1(props) {
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

// 自定义Hooks
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }
  const ChatAPI = null
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }
  })
  return isOnline
}

function FriendStatus (props) {
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline === null) {
    return 'Loading'
  }
  return isOnline ? 'onLine' : 'offLine'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)

  return (
    <li style={{ color: isOnline ? 'green': 'reed'}}>
      {props.friend.name}
    </li>
  )
}

class ExampleHooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

}

export{ HooksExample, FriendStatus, FriendListItem }
