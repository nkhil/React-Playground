import React from 'react';
import logo from './logo.jpg';
import './Logo.css';

const Logo = () => {
  return(
    <div className="logo">
      <img src={logo} alt="logo" width="100px" />
    </div>
  );
}

export default Logo;