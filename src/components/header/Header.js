import React from 'react';
import logo from '../../assets/nouille.png';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="logo-header">
      <a href="/">
        <img alt="logo" src={logo} />
      </a>
    </div>
    <div>
      <h3>BIENVENUE / いらっしゃいませ</h3>
    </div>
  </div>
);

export default Header;
