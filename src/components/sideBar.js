import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd'

import menu from '../router/config'

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
        <span><Icon type={x.icon}></Icon>{x.title}</span>
      </Menu.Item>
      return x.routes && x.routes.length === 0 ? hasNoChild : hasChild
    })
  }
  childrenItem(children = []) {
    return children.map((x, index) => {
      return <Menu.Item key={x.key} title={x.name}>
        <span>{x.name}</span>
      </Menu.Item>
    })
  }
  render () {
    return (
      <Menu
        onClick={this.handleClick}
        mode="inline"
        theme="dark">
          {/* <SubMenu
            key="sub1"
            title={
              <span>111</span>
            }>
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key='1'>option 1</Menu.Item>
                <Menu.Item key='2'>option 2</Menu.Item>
              </Menu.ItemGroup>
          </SubMenu> */}
          {this.siderBarList(menu)}
      </Menu>
      // 111
    )
  }
}

export default Sider
