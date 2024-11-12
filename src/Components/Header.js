import React from 'react'
import './Header.css';
import {LOGO} from '../Utils/const';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <img src={LOGO} alt="Logo" />
    </div>
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
    )
}

export default Header
