import React from 'react'
import { Switch, Route } from 'react-router'

import appHome from '../views/app-manage/app-home'
import appIcon from '../views/app-manage/app-icon'

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index/app/app-home" component={appHome}></Route>
        <Route path="/index/app/app-icon" component={appIcon}></Route>
      </Switch>
    )
  }
}

export default AppRouter
