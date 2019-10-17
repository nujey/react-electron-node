import React from 'react';

import './App.css';
import './scss/index.scss'

import localStorage from './utils/localstorage'
import history from './utils/history'

import RouteConfig from './router/config'

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
      if (res == 1) {
        history.push('/index')
      }
    })
  }

  render() {
    return (
      <RouteConfig />
    )
  }
}

export default App;
