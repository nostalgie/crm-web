import React from 'react';
import './main-content.scss';
import LeftNavBar from '../LeftNavBar';

import { roles } from '../../constants';

/* eslint-disable react/prefer-stateless-function */
export default class MainContent extends React.PureComponent {
  render() {
    return (
      <main className="row fix">
        <div className="alert alert-secondary col-3">
          <LeftNavBar currentRole={roles.SENIOR_ADMIN} />
        </div>
        <div className="alert alert-primary col-5" />
        <div className="alert alert-secondary col-4" />
      </main>
    );
  }
}
