import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import './scss/index.scss'

import Sider from "./components/sideBar.js"
import RouteConfig from './router/config'


class App extends React.Component {
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
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
