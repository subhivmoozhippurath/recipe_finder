import React from 'react'
import { LOGO } from '../Utils/const'
const Header = () => {
  return (
<header className="header">
  {/* Logo */}
  <img className="logo" src={LOGO} alt="logo" />
  
  {/* Navigation links or other content */}
  <nav className="nav">
    <a  className="nav-link">Home</a>
  </nav>
</header>
  )
}

export default Header
