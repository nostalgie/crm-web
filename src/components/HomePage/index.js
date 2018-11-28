import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';

import './styles.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="vertical-control">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
