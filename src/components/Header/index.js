import React from 'react';
import ImageWrapper from '../ImageWrapper';

import './header.scss';
import logo from '../../assets/images/logo.jpg';

const Header = () => (
  <ul className="header-wrapper">
    <ImageWrapper url={logo} alt="logo" width="300px" />
    <button type="button" className="btn btn-secondary">
      Выход
    </button>
  </ul>
);

export default Header;
