import React from 'react'
import { Link } from 'react-router-dom'

class Prim extends React.Component {
  render() {
    return (
      <div>
        <h3>404</h3>
        <div>
          <Link to="/login">去登录</Link>
        </div>
      </div>
    )
  }
}

export default Prim