import { useState, useEffect } from 'react'


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

