import React from 'react'

import history from '../../utils/history'
import localStorage from '../../utils/localstorage'

import Sider from "../../components/sideBar.js"

class MainWeb extends React.Component {
  handleLogout = () => {
    if (localStorage.getItem('isLogin', true) === 1) {
      localStorage.setItem('isLogin', 0)
      history.push('/')
    }
  }
  render() {
    return (
      <div className="container">
        <section className="sidebar">
          <Sider />
        </section>
        <section className="main">
          <header className="header">
            <span>你好啊，张小鹿</span>
            <span onClick={this.handleLogout}>退出登录</span>
          </header>
          <div className="wrapper">
            {/* <RouteConfig /> */}
          </div>
          <footer className="footer">
            <span className="copyright">Copyright@2020 张小鹿</span>
          </footer>
        </section>
      </div>
    )
  }
}

export default MainWeb
