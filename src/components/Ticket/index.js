import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Ticket = (props) => {
  const {
    createdAt,
    description,
    firstName,
    lastName,
    id,
    phoneNumber,
    showButton
  } = props
  const date = new Date(createdAt)

  return (
    <div className='card mb-1'>
      <h6 className='card-header'>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <span className='nav-link active'>
              {`КОМПАНИЯ:${firstName + ' ' + lastName}`}
            </span>
          </li>
          <li className='nav-item'>
            <span className='nav-link active'>{`тел.${phoneNumber}`}</span>
          </li>
          <li className='nav-item'>
            <span className='nav-link disabled'>
              {`от ${date.toLocaleDateString()}`}
            </span>
          </li>
        </ul>
      </h6>
      <div className='card-body'>
        <p className='card-text text-center'>{description}</p>
        {showButton && (
          <Link to={`/dashboard/ticket/${id}`} className='btn btn-primary float-right'>
            Показать
          </Link>
        )}
        {props.children}
      </div>
    </div>
  )
}

Ticket.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string,
  type: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
}
export default Ticket
