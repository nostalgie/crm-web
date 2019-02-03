import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute/container'
import Dashboard from 'components/Dashboard'
import LoginLayout from 'components/LoginLayout/container'

import { routes } from '../../constants'

const Routes = () => (
  <Switch>
    <AuthRoute
      exact
      path={routes.LOGIN}
      component={LoginLayout}
      noAuthRequired
    />
    <AuthRoute path={routes.DASHBOARD} component={Dashboard} userAuthRequired />
    <Redirect to={routes.LOGIN} />
  </Switch>
)

export default Routes
