import React from 'react'
import ImageWrapper from '../ImageWrapper'

import './header.scss'
import logo from '../../assets/images/logo.jpg'

class Header extends React.PureComponent {
  onExit = () => {
    this.props.logout()
  }

  render () {
    return (
      <ul className='header-wrapper'>
        <ImageWrapper url={logo} alt='logo' width='300px' />
        <button type='button' className='btn btn-secondary' onClick={this.onExit}>
          Выход
        </button>
      </ul>
    )
  }
}

export default Header
