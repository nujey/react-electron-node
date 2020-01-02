import React from 'react'
import { Switch, Route } from 'react-router'

import MyResume from '../views/mine/my-resume'

class MineHooksRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index/mine/my-resume" component={MyResume}/>
      </Switch>
    )
  }
}

export default MineHooksRoute
