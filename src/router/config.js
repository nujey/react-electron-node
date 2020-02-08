import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router'

import Login from "../views/home/login"
import Home from '../views/home/home'
import Prim from '../views/home/404'
import HomeIndex from '../views/home/home-index'
import Register from '../views/home/register'
// import Study from '../views/test-study/a11y-study'
// const Study = lazy(() => import('../views/test-study/context'))
// const Study = lazy(() => import("../views/test-study/error-boundaries"))

// const Study = lazy(() => import("../views/test-study/refs"))
// const Study = lazy(() => import("../views/test-study/hoc"))
const Study = lazy(() => import("../views/test-study/mount"))

class RouteConfig extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" component={Register}/>
        <Route path="/index" component={HomeIndex} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={Prim} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/study" component={Study} />
        </Suspense>
      </Switch>
    )
  }
}

export default RouteConfig
