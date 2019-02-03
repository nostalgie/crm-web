import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Ticket from 'components/Ticket'
import TicketFull from 'components/TicketFull/container'

import './styles.scss'

class TaskManager extends Component {
  state = {
    id: 0
  };

  componentDidMount () {
    this.getTickets()
  }

  async componentDidUpdate (prevProps) {
    // const { pathname } = this.props.location;
    // if (pathname !== prevProps.location.pathname) {
    // this.getTickets();
    // }
    const { state } = this.props
    if (state !== prevProps.state) {
      this.setState({ id: 0 })
      await this.getTickets()
    }
  }

  getTickets = () => {
    // const location = this.props.location.pathname;
    // const splittedUrl = location.split("/");
    const state = 'open'
    this.props.getTickets(state)
  };

  render () {
    const { tickets } = this.props
    return (
      <div className='d-flex flex-sm-column'>
        {tickets.map(ticket => {
          return (
            <Ticket
              key={`ticket_${ticket.id}`}
              {...ticket}
            />
          )
        })}
      </div>
    )
  }
}

export default TaskManager
