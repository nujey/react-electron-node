import React from 'react'
import { Switch, Route } from 'react-router'

import UserList from '../views/user/userlist'

class UserRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Route path="/index/user/user-list" component={UserList}/>
      </Switch>
    )
  }
}

export default UserRouter
