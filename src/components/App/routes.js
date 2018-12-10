import React from "react";
import { Switch, withRouter } from "react-router-dom";
import AuthRoute from "components/AuthRoute/container";
import HomePage from "components/HomePage";
import LoginLayout from "components/LoginLayout/container";

import { routes } from "../../constants";

const Routes = () => (
  <Switch>
    <AuthRoute
      exact
      path={routes.LOGIN}
      component={LoginLayout}
      noAuthRequired
    />
    <AuthRoute path={routes.DASHBOARD} component={HomePage} userAuthRequired />
  </Switch>
);

export default withRouter(Routes);
