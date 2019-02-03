import React, { Component } from "react";
import Ticket from "components/Ticket";
import TicketFull from "components/TicketFull/container";
import TaskFilter from "components/TaskFilter";
import { periods, types } from "constants/menus/filter";

import "./styles.scss";

class TaskManager extends Component {
  state = {
    id: 0,
    filter: {
      type: types.ALL,
      customer: null,
      period: periods.DAY.value,
      dateSt: "1970-01-01",
      dateEnd: "2020-01-01"
    }
  };

  componentDidMount() {
    this.getTickets();
  }

  async componentDidUpdate(prevProps) {
    const { state } = this.props;
    if (state !== prevProps.state) {
      this.setState({ id: 0 });
      await this.getTickets();
    }
  }

  getTickets = () => {
    const { state } = this.props;
    const { customer, period, dateSt, dateEnd } = this.state;
    let actualPeriod;
    periods.keys().map(key => {
      if (periods[key].value === period) {
        actualPeriod = periods[key].request;
      }
    });
    this.props.getTickets({
      state,
      customer,
      period: actualPeriod,
      startDate: dateSt,
      endDate: dateEnd
    });
  };

  handleSubmit = filter => {
    this.setState(filter, this.getTickets);
  };

  handleShow = id => {
    this.setState({ id });
  };

  render() {
    const { tickets } = this.props;
    const { id, filter } = this.state;
    const ticketProps = tickets.find(({ id }) => id === this.state.id);
    return (
      <React.Fragment>
        <TaskFilter handleSubmit={this.handleSubmit} initState={filter} />
        <div>
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
        </div>
      </React.Fragment>
    );
  }
}

export default TaskManager;
