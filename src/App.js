import React from 'react';

import './App.css';
import './scss/index.scss'

import localStorage from './utils/localstorage'
import history from './utils/history'

import Sider from "./components/sideBar.js"
import RouteConfig from './router/config'


class LoginDom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      domState: 'hahahah'
    }
  }
  handleLogout = () => {
    localStorage.setItem('isLogin', '0')

    history.push('/home')
  }
  render() {
    return (
      <div>111</div>
      // <RouteConfig />
    )
  }
}

class LogoutDom extends React.Component{
  render() {
    return (
      <div className="main-content">
        <RouteConfig />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  componentWillMount() {
    localStorage.getItem('isLogin').then(res => {
      this.setState({
        isLogin: res
      })
      if (res == '0') {
        history.push('/home')
      }
    })
  }

  render() {
    return (
      <LoginDom />
    )
  }
}

export default App;
