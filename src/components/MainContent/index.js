import React from 'react'
import LeftNavBar from 'components/LeftNavBar'
import Routes from './routes'

import { ticketStates } from '../../constants'

import './main-content.scss'

/* eslint-disable react/prefer-stateless-function */
export default class MainContent extends React.PureComponent {
  state = {
    ticketsState: ticketStates.OPEN
  };

  setTicketsState = newState => this.setState({ ticketsState: newState });

  render () {
    const { currentRole } = this.props
    return (
      <main className=' fix'>
        <div className='alert alert-secondary col-3'>
          <LeftNavBar
            currentRole={currentRole}
            setTicketsState={this.setTicketsState}
          />
        </div>
        <div className='alert alert-primary col-5'>
          <Routes />
          {/* <TaskManager currentRole={currentRole} state={ticketsState} /> */}
        </div>
        <div className='alert alert-secondary col-4' />
      </main>
    )
  }
}
