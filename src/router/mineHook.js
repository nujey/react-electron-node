import React from 'react'
import { Switch, Route } from 'react-router'

import MyResume from '../views/mine/my-resume'
import FromTest from '../views/mine/test'

class MineHooksRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index/mine/my-resume" component={MyResume}/>
        <Route path="/index/mine/test" component={FromTest}/>
      </Switch>
    )
  }
}

export default MineHooksRoute
