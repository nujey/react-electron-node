import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>home111</h3>
        <div>
          <Link to={`/login`}>去登录</Link>
          <Link to="/404">去404</Link>
        </div>
      </div>
    )
  }
}

export default Home