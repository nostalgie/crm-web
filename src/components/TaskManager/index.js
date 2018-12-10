import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Ticket from "components/Ticket";
import TicketFull from "components/TicketFull";

import "./styles.scss";

class TaskManager extends Component {
  state = {
    id: 0
  };

  componentDidMount() {
    this.getTickets();
  }

  componentDidUpdate(prevProps) {
    // const { pathname } = this.props.location;
    // if (pathname !== prevProps.location.pathname) {
    // this.getTickets();
    // }
    const { state } = this.props;
    if (state !== prevProps.state) {
      this.getTickets();
    }
  }

  getTickets = () => {
    // const location = this.props.location.pathname;
    // const splittedUrl = location.split("/");
    const { state } = this.props;
    this.props.getTickets(state);
  };

  handleShow = id => {
    this.setState({ id });
  };

  render() {
    const { tickets } = this.props;
    const { id } = this.state;
    const ticketProps = tickets.find(({ id }) => id === this.state.id);
    return (
      <React.Fragment>
        {id > 0 ? (
          <TicketFull {...ticketProps} />
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

export default TaskManager;
