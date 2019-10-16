import React from 'react'

class MainWeb extends React.component {
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

export default MainWeb
