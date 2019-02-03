import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute/container'
import TicketFull from 'components/TicketFull/container'
import TaskManager from 'components/TaskManager/container'

import { routes } from '../../constants'

const Routes = () => (
  <Switch>
    <AuthRoute path={routes.TICKETS} component={TaskManager} userAuthRequired />
    <AuthRoute
      exact
      path={routes.TICKET_INFO}
      component={TicketFull}
      userAuthRequired
    />
  </Switch>
)

export default Routes
