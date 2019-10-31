// 构建自己的hooks可以将组件逻辑提取到可重用的函数当中

import { useState, useEffect } from 'react'

function useFriendStatus(friendID) {
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

  return isOnline
}

function FriendStatus (props) {
  // const [isOnline, setIsOnline] = useState(null)

  // function handleStatusChange(status) {
  //   setIsOnline(status.isOnline)
  // }

  // const ChatAPI = null
  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
  //   }
  // })

  const isOnline = useFriendStatus(props.friend.id)

  if(isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}


function FriendListItem (props) {
  // const [isOnline, setIsOnline] = useState(null)

  // function handleStatusChange(status) {
  //   setIsOnline(status.isOnline)
  // }

  // const ChatAPI = null
  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
  //   }
  // })

  const isOnline = useFriendStatus(props.friend.id)
  
  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
      {props.friend.name}
    </li>
  )
}
