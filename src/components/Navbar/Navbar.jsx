import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='parent-container'>
      <p>Portfolio</p>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="Home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="Skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="Projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="Education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link></li>
        <li><Link to="Contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
