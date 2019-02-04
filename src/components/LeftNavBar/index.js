import React from 'react'
import { Link } from 'react-router-dom'

import { sortTasksMenu } from '../../constants/menus/sortTasksMenu'
import { innerTasksMenu } from '../../constants/menus/innerTasksMenu'
import { routes } from '../../constants'

import './styles.scss'

const LeftNavBar = props => (
  <React.Fragment>
    {[sortTasksMenu, innerTasksMenu]
      .filter(elem =>
        elem.array.some(option =>
          option.roles.some(role => role === props.currentRole)
        )
      )
      .map(elem => (
        <div key={elem.title} className='container fix-retarded-bootstrap'>
          <h4 className='dropdown-header'>{elem.title}</h4>
          {elem.array
            .filter(item => item.roles.some(role => role === props.currentRole))
            .map(currentItem => (
              <Link to={`${routes.TICKETS}?state=${currentItem.state}`} className='dropdown-item'>
                {currentItem.name}
              </Link>
            ))}
        </div>
      ))}
    <div key='Заказчики' className='container fix-retarded-bootstrap'>
      <h4 className='dropdown-header'>Заказчики</h4>
      {props.customers.map(customer => (
        <span className='dropdown-item'>
          {customer.name}
        </span>
      ))}
    </div>
  </React.Fragment>
)

export default LeftNavBar
