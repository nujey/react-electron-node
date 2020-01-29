import React from 'react'
import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'

function Todo({completed, text, onClick}) {
  return (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
