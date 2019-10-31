import { useState, useEffect } from 'react'


// 不要在循环，条件或嵌套函数中调用 Hook 
// 总是在 React 函数的顶层使用 Hooks


// 不要在常规 JavaScript 函数中调用 Hook 
// 在 React 函数式组件中调用 Hooks 。
// 从自定义 Hooks 调用 Hooks 
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

function Form () {

  const [name, setName] = useState('Mary')

  useEffect(function persistForm() {
    if (name !== '') {
      localStorage.setItem('formData', name)
    }
  })

  const [surname, setSurname] = useState('Poppins')

  useEffect(function updateTitle() {
    document.title = name + ' ' + surname
  })
}


