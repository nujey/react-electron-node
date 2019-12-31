import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
// import history from '../../utils/history'
import localStorage from '../../utils/localstorage'
import './home.scss'

import Sider from "../../components/sideBar.js"
import { WorkRoute }  from '../../router/work'
import UserRouter from '../../router/user'
import HooksRoute from '../../router/Hooks'
import AppRouter from '../../router/application'

class MainWeb extends React.Component {
  handleLogout = () => {
    // console.log(this.props)
    if (localStorage.getItem('isLogin', true) === 1) {
      localStorage.setItem('isLogin', 0)
    }
    this.props.history.push('/')
  }
  render() {
    const wrapperStyle = {
      width:'100%', 
      height:'100%'
    }
    const breadcrumbNameMap = {
      '/index': '首页',
      '/index/user': '用户中心',
      '/index/user/user-list': '用户列表',
      '/index/app': '私人订制',
      '/index/app/app-home': '首页定制',
      '/index/app/app-icon': '应用管理',
      '/index/app/app-article': '公告文章'
    }
    const routes = {
      '/index': '首页',
      '/index/user/user-list': '用户列表',
      '/index/app/app-home': '首页定制',
      '/index/app/app-icon': '应用管理',
      '/index/app/app-article': '公告文章'
    }
    // console.log(this.props.location.pathname)
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={Object.keys(routes).includes(url) ? url : '#'}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      )
    })
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Icon type="home"></Icon>
        <Link to="/index"> 回家</Link>
      </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems)

    return (
      <div className="home-container">
        <section className="sidebar">
          <Sider />
        </section>
        <section className="main">
          <header className="header-breadcrumb">
            <Breadcrumb separator=">>"> 
              {breadcrumbItems}
            </Breadcrumb>
            <div>
              <span>你好啊，张小鹿</span>
              <span onClick={this.handleLogout}>退出登录</span>
            </div>
          </header>
          <div className="wrapper" style={wrapperStyle}>
            <WorkRoute />
            <HooksRoute />
            <UserRouter />
            <AppRouter />
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
