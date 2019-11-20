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
    fetch('http://localhost:9090/user/api/login')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        // this.handlePost()
      })

    // history.push({state: { a: 'a'}, pathname: '/index/work-list', query: { id: 'list'}})
  }
  handlePost = () => {
    const data = {
      name: 'cc',
      age: 25
    }
    fetch('http://localhost:9090/user/api/removeItem', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "type": "app"
      }
    }).then(response => response.json())
    .then(result => {
      console.log(result)
    })
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
            <a  className="login-btn" onClick={this.handlePost}>登录</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
