import React from 'react'
import PropTypes from 'prop-types'
import { localizeAdminRole } from 'utils/localizers'

import { userTypes } from '../../constants'

class Update extends React.Component {
  render () {
    const {
      createdAt,
      message,
      userInfo: { firstName, lastName, name, type, role }
    } = this.props
    const date = new Date(createdAt)
    return (
      <div className='card'>
        <h6 className='card-header'>
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <span className='nav-link active'>
                {type === userTypes.CUSTOMER
                  ? `компания: ${name}`
                  : `${localizeAdminRole(role)} ${firstName} ${lastName}`}
              </span>
            </li>
            <li className='nav-item'>
              <span className='nav-link disabled'>
                {`от ${date.toLocaleDateString()}`}
              </span>
            </li>
          </ul>
        </h6>
        <div className='card-body'>
          <p className='card-text text-center'>{message}</p>
        </div>
      </div>
    )
  }
}

Update.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string,
  type: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
}
export default Update
