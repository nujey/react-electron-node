import React from 'react'
import { Switch, Route } from 'react-router'

import Login from "../views/home/login"
import Home from '../views/home/home'
import Prim from '../views/home/404'
import HomeIndex from '../views/home/home-index'

import WorkList from '../views/work/worklist'

class RouteConfig extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/index" component={HomeIndex} >
          <Route path="work-list" component={WorkList}/>
        </Route> */}
        <Route path="/index" component={HomeIndex} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={Prim} />
      </Switch>
    )
  }
}

export default RouteConfig
