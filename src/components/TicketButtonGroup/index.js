import React from 'react'
import { ticketButtons } from '../../constants'

const TicketButtonGroup = (props) => {
  const { role, isFinished, isRated, isDisabled, addUpdate } = props

  console.log(ticketButtons)
  return (
    <div className='btn-toolbar justify-content-between'>
      <div className='btn-group'>
        {!isFinished && ticketButtons
          .filter(({ availableTo }) => !availableTo || availableTo.includes(role))
          .map(button => (
            <button
              key={`ticket-button-${button.label}`}
              className='btn btn-primary'
              onClick={addUpdate}
              disabled={isDisabled}
              data-newExecutor={button.newExecutor}
            >
              {button.label}
            </button>
          ))}
      </div>
    </div>
  )
}

export default TicketButtonGroup
