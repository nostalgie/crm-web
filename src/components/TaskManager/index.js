import React, { Component } from 'react'
import Ticket from 'components/Ticket'

import './styles.scss'

class TaskManager extends Component {
  componentDidMount () {
    this.getTickets()
  }

  async componentDidUpdate (prevProps) {
    const { search } = this.props.location
    if (search !== prevProps.location.search) {
      this.getTickets()
    }
  }

  getTickets = () => {
    const { search } = this.props.location
    const state = search.split('=')[1]

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
