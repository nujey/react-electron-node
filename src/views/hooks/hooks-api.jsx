import React, { useState } from 'react'

function FunState() {
  const [count, setCount] = useState(0)

  return (
    <>
      count: {count}
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}></button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}></button>
    </>
  )
}