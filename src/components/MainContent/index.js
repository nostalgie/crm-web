import React from "react";
import { Switch, Route } from "react-router-dom";
import LeftNavBar from "../LeftNavBar";
import TaskManager from "../TaskManager/container";

import { roles, routes, ticketStates } from "../../constants";

import "./main-content.scss";

/* eslint-disable react/prefer-stateless-function */
export default class MainContent extends React.PureComponent {
  state = {
    ticketsState: ticketStates.OPEN
  };

  setTicketsState = newState => this.setState({ ticketsState: newState });

  render() {
    const { ticketsState } = this.state;
    const { currentRole } = this.props;
    return (
      <main className=" fix">
        <div className="alert alert-secondary col-3">
          <LeftNavBar
            currentRole={currentRole}
            setTicketsState={this.setTicketsState}
          />
        </div>
        <div className="alert alert-primary col-5">
          <TaskManager currentRole={currentRole} state={ticketsState} />
        </div>
        <div className="alert alert-secondary col-4" />
      </main>
    );
  }
}
