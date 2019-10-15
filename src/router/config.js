import React from 'react'
import { Switch, Route } from 'react-router'

import Login from "../views/home/login"
import Home from '../views/home/home'
import Prim from '../views/home/404'

class RouteConfig extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={Prim} />
      </Switch>
    )
  }
}

export default RouteConfig
