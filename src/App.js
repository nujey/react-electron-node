import React from 'react';
import './App.css';
import './scss/index.scss'

import Sider from "./components/sideBar.js"
import RouteConfig from './router/config'

class LoginDom extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="sidebar">
          <Sider />
        </section>
        <section className="main">
          <header className="header">
            <span>你好啊，张小鹿</span>
          </header>
          <div className="wrapper">
            <RouteConfig />
          </div>
          <footer className="footer">
            <span className="copyright">Copyright@2020 张小鹿</span>
          </footer>
        </section>
      </div>
    )
  }
}

class LogoutDom extends React.Component{
  render() {
    return (
      <div className="wrapper">
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
  render() {
    return (
      this.state.isLogin ? <LoginDom/> : <LogoutDom/>
    )
  }
}

export default App;
