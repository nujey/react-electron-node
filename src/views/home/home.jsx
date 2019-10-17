import React from 'react'
import { Link } from 'react-router-dom'

import bgImg from '../../assets/images/home.jpg'
import "./home.scss"

import history from '../../utils/history'
import localStorage from '../../utils/localstorage'

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  handleClick() {
    localStorage.setItem('isLogin', 1)
    history.push('/index')
  }
  render() {
    return (
      <div className="main-content">
        <img src={bgImg} alt="" className="image-bg"/>
        <div className="image-bg opacity-box">
          <div className="login-box">
            <h3>欢迎来到血小板实验室</h3>
            <Link to="/index" className="login-btn" onClick={this.handleClick}>登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
