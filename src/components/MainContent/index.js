import React from 'react'
import LeftNavBar from 'components/LeftNavBar/container'
import NewTicketForm from 'components/Forms/NewTicketForm'
import Routes from './routes'

import './main-content.scss'

/* eslint-disable react/prefer-stateless-function */
export default class MainContent extends React.PureComponent {
  componentDidMount () {
    this.props.getCustomers()
  }

  createNewTicket = (values) => {
    this.props.createTicket(values)
  }

  render () {
    return (
      <main className='fix'>
        <div className='alert alert-secondary col-3'>
          <LeftNavBar />
        </div>
        <div className='alert alert-primary col-5'>
          <Routes />
        </div>
        <div className='alert alert-secondary col-4'>
          <NewTicketForm onSubmit={this.createNewTicket} />
        </div>
      </main>
    )
  }
}
