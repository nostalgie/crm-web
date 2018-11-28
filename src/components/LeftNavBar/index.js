/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import { sortTasksMenu } from '../../constants/menus/sortTasksMenu';
import { innerTasksMenu } from '../../constants/menus/innerTasksMenu';
import { customersMenu } from '../../constants/menus/customersMenu';
import './styles.scss';

const LeftNavBar = props =>
  [sortTasksMenu, innerTasksMenu, customersMenu].map(elem => (
    <div key={elem.title} className="dropdown-menu container">
      <h4 className="dropdown-header">{elem.title}</h4>
      {elem.array
        .filter(item => item.roles.some(role => role === props.currentRole))
        .map(currentItem => (
          <div key={currentItem.name} className="dropdown-item">
            <span>{currentItem.name}</span>
          </div>
        ))}
    </div>
  ));

export default LeftNavBar;
