import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd'
import { Link } from 'react-router-dom'

import menu from './menus'

const { SubMenu } = Menu
// const Menu
class Sider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [] // 路由列表
    }
  }
  handleClick = e => {
    menu.map(x => {
      const {title: title1, ...z } = x
      console.log(title1)
    })
  }
  siderBarList(list = []) {
    return list.map((x) => {
      const hasChild = <SubMenu key={x.key} title={<span><Icon type={x.icon}></Icon>{x.title}</span>}>
        {this.childrenItem(x.routes)}
      </SubMenu>
      const hasNoChild = <Menu.Item key={x.key} title={x.title}>
        {/* <Link to={x.path}> */}
          <Icon type={x.icon}></Icon>{x.title}
        {/* </Link> */}
      </Menu.Item>
      return x.routes && x.routes.length === 0 ? hasNoChild : hasChild
    })
  }
  childrenItem(children = []) {
    return children.map((x, index) => {
      return <Menu.Item key={x.key} title={x.name}>
        <Link to={x.path}>{x.name}</Link>
      </Menu.Item>
    })
  }
  render () {
    return (
      <Menu
        onClick={this.handleClick}
        mode="inline"
        theme="dark">
          {this.siderBarList(menu)}
      </Menu>
    )
  }
}

export default Sider
