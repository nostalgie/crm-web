import React, { Component } from "react";
import TaskFilter from "components/TaskFilter/container";
import { periods, types } from "constants/menus/filter";
import Pagination from "components/Pagination";
import Ticket from "components/Ticket";

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

  async componentDidUpdate(prevProps, prevState) {
    const { search } = this.props.location;
    if (search !== prevProps.location.search) {
      const newCurrentPage = 1;
      this.getTickets(newCurrentPage);
    }
  }

  getTickets = page => {
    const { search } = this.props.location;
    const state = search.split("=")[1];
    const { customer, period, dateSt, dateEnd } = this.state.filter;
    this.props.getTickets({
      state,
      customer,
      period,
      startDate: dateSt,
      endDate: dateEnd,
      page
    });
  };

  handleSubmit = filter => {
    let { currentPage } = this.props;
    this.setState({ filter }, () => {
      this.getTickets(currentPage);
    });
  };

  handleShow = id => {
    this.setState({ id });
  };

  handlePagination = currentPage => {
    this.getTickets(currentPage);
  };

  render() {
    const { tickets, pages, currentPage } = this.props;
    console.log(tickets, pages, currentPage);
    return (
      <div className="mh-100">
        <TaskFilter
          handleSubmit={this.handleSubmit}
          initState={this.state.filter}
        />
        <div className="d-flex flex-sm-column">
          {tickets.map(ticket => {
            return (
              <Ticket
                key={`ticket_${ticket.id}`}
                {...ticket}
                showButton={true}
              />
            );
          })}
        </div>
        {pages !== 1 ? (
          <Pagination
            pages={pages}
            currentPage={currentPage}
            handlePagination={this.handlePagination}
          />
        ) : null}
      </div>
    );
  }
}

export default TaskManager;
