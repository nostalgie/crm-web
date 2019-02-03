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
    phoneNumber
  } = props
  const date = new Date(createdAt)

  return (
    <div className='card'>
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
              {`от ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
            </span>
          </li>
        </ul>
      </h6>
      <div className='card-body'>
        <p className='card-text text-center'>{description}</p>
        <Link to={`/dashboard/${id}`} className='btn btn-primary float-right'>
            Показать
        </Link>
        {/* <button
            className='btn btn-primary float-right'
            onClick={() => {
              handleShow(id)
            }}
          >
            Показать
          </button> */}
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
