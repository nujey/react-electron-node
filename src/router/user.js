import React from 'react'
import { Switch, Router } from 'react-router'

import UserList from '../views/user/userlist'

class UserRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Router path="/index/user/user-list" component={UserList}/>
      </Switch>
    )
  }
}

export default UserRouter
