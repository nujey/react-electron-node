import React, { Component } from 'react'

class SideBar extends Comment {
  constructor(props) {
    super(props)
    this.state = {
      routes: [] // 路由列表
    }
  }
  render () {
    return (
      <ul className="sidebar-wrapper">
        侧边栏
      </ul>
    )
  }
}

export default SideBar
