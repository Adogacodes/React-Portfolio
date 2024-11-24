import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Menu */}
      <ul className={`Navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
