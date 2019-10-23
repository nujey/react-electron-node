import React from 'react'
import { Switch, Route } from 'react-router'

import {HooksExample} from '../views/hooks/glanceHooks'

class HooksRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/index/hooks-glance" component={HooksExample}/>
      </Switch>
    )
  }
}

export default HooksRoute
