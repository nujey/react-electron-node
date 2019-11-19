import React from 'react'
import { Link } from 'react-router-dom'

import bgImg from '../../assets/images/home.jpg'
import "./home.scss"

import history from '../../utils/history'
import localStorage from '../../utils/localstorage'

class Home extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }
  handleClick(e) {
    e.preventDefault()
    // localStorage.setItem('isLogin', 1)
    const response = fetch('http://localhost:3000/api/login').then(res => res.text())
    // const result = response.json()
    console.log(response)

    // history.push({state: { a: 'a'}, pathname: '/index/work-list', query: { id: 'list'}})
  }
  render() {
    // const urlQuery = {
    //   id: 'list'
    // }
    return (
      <div className="main-content">
        <img src={bgImg} alt="" className="image-bg"/>
        <div className="image-bg opacity-box">
          <div className="login-box">
            <h3>欢迎来到血小板实验室</h3>
            <a  className="login-btn" onClick={this.handleClick}>登录</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
