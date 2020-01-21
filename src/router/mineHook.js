import React from 'react'
import { Switch, Route } from 'react-router'

import MyResume from '../views/mine/my-resume'
import MineResume from '../views/mine/mine-resume'

class MineHooksRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index/mine/my-resume" component={MyResume}/>
        <Route path="/index/mine/resume-list" component={MineResume}/>
      </Switch>
    )
  }
}

export default MineHooksRoute
