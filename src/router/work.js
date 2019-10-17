import React from 'react'
import { Switch, Route } from 'react-router'

import WorkList from '../views/work/worklist'
import WorkDetail from '../views/work/workdetail'

class WorkRoute extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/index/work-list" component={WorkList}/>
        <Route path="/index/work-detail" component={WorkDetail}/>
      </Switch>
    )
  }
}

export { WorkRoute }

