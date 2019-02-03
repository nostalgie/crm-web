import React from 'react'
import { Switch } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute/container'
import TicketFull from 'components/TicketFull/container'
import TaskManager from 'components/TaskManager/container'

import { routes } from '../../constants'

const Routes = () => (
  <Switch>
    <AuthRoute
      exact
      path={routes.TICKET}
      component={TicketFull}
      userAuthRequired
    />
    <AuthRoute path={routes.DASHBOARD} component={TaskManager} userAuthRequired />
  </Switch>
)

export default Routes
