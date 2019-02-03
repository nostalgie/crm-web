import React, { Component } from "react";
import Ticket from "components/Ticket";
import TaskFilter from "components/TaskFilter/container";
import { periods, types } from "constants/menus/filter";

import "./styles.scss";

class TaskManager extends Component {
  state = {
    filter: {
      type: types.ALL,
      customer: null,
      period: periods.DAY.request,
      dateSt: "1970-01-01",
      dateEnd: "2020-01-01"
    }
  };

  componentDidMount() {
    this.getTickets();
  }

  async componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (search !== prevProps.location.search) {
      this.getTickets();
    }
  }

  getTickets = () => {
    const { search } = this.props.location;
    const state = search.split("=")[1];
    const { customer, period, dateSt, dateEnd } = this.state.filter;

    this.props.getTickets({
      state,
      customer,
      period,
      startDate: dateSt,
      endDate: dateEnd
    });
  };

  handleSubmit = filter => {
    console.log(filter);
    this.setState({ filter }, this.getTickets);
  };

  handleShow = id => {
    this.setState({ id });
  };

  render() {
    const { tickets } = this.props;
    return (
      <React.Fragment>
        <TaskFilter
          handleSubmit={this.handleSubmit}
          initState={this.state.filter}
        />
        <div className="d-flex flex-sm-column">
          {tickets.map(ticket => {
            return <Ticket key={`ticket_${ticket.id}`} {...ticket} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default TaskManager;
