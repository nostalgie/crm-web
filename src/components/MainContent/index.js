import React from "react";
import { Switch, Route } from 'react-router-dom';
import LeftNavBar from "../LeftNavBar";
import TaskManager from "../TaskManager/container";

import { roles, routes } from "../../constants";

import "./main-content.scss";

/* eslint-disable react/prefer-stateless-function */
export default class MainContent extends React.PureComponent {
  render() {
    return (
      <main className=" fix">
        <div className="alert alert-secondary col-3">
          <LeftNavBar currentRole={roles.CUSTOMER} />
        </div>
        <div className="alert alert-primary col-5">
          <Switch>
            <Route path={routes.TICKETS_OPEN} render={() => ( <TaskManager currentRole={roles.CUSTOMER} /> )} />
            <Route path={routes.TICKETS_AWAITING} render={() => ( <TaskManager currentRole={roles.CUSTOMER} /> )} />
          </Switch>
        </div>
        <div className="alert alert-secondary col-4" />
      </main>
    );
  }
}
