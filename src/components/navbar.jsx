import React, { useState } from 'react';
import logo from './weblogo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo1" />
          {/* <a className="menu-link2" href="/">Chatzyr</a> */}
          <Link className="menu-link2" to="/">Chatzyr</Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} >
          <li className="menu-item"  >
            {/* <a className="menu-link" href="/">Home</a> */}
            <Link className="menu-link" to="/">Home</Link>
          </li>
          <li className="menu-item">
            {/* <a className="menu-link" href="/">Shop</a> */}
            <Link className="menu-link" to="/shop">Shop</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/report">Report</Link>
            {/* <Link></Link> */}
          </li>
          <li className="menu-item">
            {/* <a className="menu-link" href="/suggestion">Suggest</a> */}
            <Link className="menu-link" to="/suggestion">Suggest</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
