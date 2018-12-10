import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SubmissionError } from "redux-form";
import Ticket from "components/Ticket";
import TicketFull from "components/TicketFull";

import "./styles.scss";

class TaskManager extends Component {
  constructor() {
    super();
    this.state = {
      id: 0
    };
  }

  componentDidMount() {
    let location = this.props.location.pathname;
    console.log(location);
    let state = location.replace(/\/[a-z]+\//, "");
    this.setState({ state }, () => this.getTickets(this.state));
  }

  componentWillUnmount() {
    console.log("kere4");
  }

  componentDidUpdate() {}

  getTickets = async values => {
    const { state } = values;
    await this.props.getTickets(state);
    const { ticketsRequestError } = this.props;
    if (ticketsRequestError) {
      throw new SubmissionError({
        _error: ticketsRequestError
      });
    }
  };

  handleSubmit = async values => {};

  handleShow = id => {
    this.setState({ id });
  };

  render() {
    const { tickets } = this.props;
    const { id } = this.state;
    const ticketProps = tickets.filter(({ id }) => id === this.state.id);
    console.log(ticketProps[0]);
    return (
      <React.Fragment>
        {id > 0 ? (
          <TicketFull {...ticketProps[0]} />
        ) : (
          <div className="d-flex flex-sm-column">
            {tickets.map(ticket => {
              return (
                <Ticket
                  key={`ticket_${ticket.id}`}
                  {...ticket}
                  handleShow={this.handleShow}
                />
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(TaskManager);
