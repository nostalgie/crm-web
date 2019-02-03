import React from 'react'
import { Link } from 'react-router-dom'

import { sortTasksMenu } from '../../constants/menus/sortTasksMenu'
import { innerTasksMenu } from '../../constants/menus/innerTasksMenu'
import { customersMenu } from '../../constants/menus/customersMenu'
import { routes } from '../../constants'

import './styles.scss'

const LeftNavBar = props =>
  [sortTasksMenu, innerTasksMenu, customersMenu]
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
            // {/* <span
            //   onClick={() => {
            //     props.setTicketsState(currentItem.state)
            //   }}
            // >
            //   {currentItem.name}
            // </span> */}
            <Link to={`${routes.TICKETS}?state=${currentItem.state}`} className='dropdown-item'>
              {currentItem.name}
            </Link>
          ))}
      </div>
    ))

export default LeftNavBar
