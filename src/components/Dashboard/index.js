import React from 'react'
import Header from '../Header/container'
import Footer from '../Footer'
import MainContent from '../MainContent/container'

import './styles.scss'

/* eslint-disable react/prefer-stateless-function */
class Dashboard extends React.PureComponent {
  render () {
    return (
      <div className='vertical-control'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default Dashboard
