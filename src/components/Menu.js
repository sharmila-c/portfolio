import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} className="logo"/>
          <span className="logo-text">
            <i>
              SHAR<span>MILA</span>
            </i>
          </span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/education" onClick={closeMenu} className={location.pathname === "/education" ? "active" : ""}>Education</Link></li>
          <li><Link to="/skills" onClick={closeMenu} className={location.pathname === "/skills" ? "active" : ""}>Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className={location.pathname === "/projects" ? "active" : ""}>Project</Link></li>
          <li><Link to="/experience" onClick={closeMenu} className={location.pathname === "/experience" ? "active" : ""}>Experience</Link></li>
          <li><a href="/contact" onClick={closeMenu} className={location.hash === "/contact" ? "active" : ""}>Contact</a></li>
        </ul>

        

 <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`nav-links-mobile ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu} className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/education" onClick={closeMenu} className={location.pathname === "/education" ? "active" : ""}>Education</Link></li>
        <li><Link to="/skills" onClick={closeMenu} className={location.pathname === "/skills" ? "active" : ""}>Skills</Link></li>
        <li><Link to="/projects" onClick={closeMenu} className={location.pathname === "/projects" ? "active" : ""}>Project</Link></li>
        <li><Link to="/experience" onClick={closeMenu} className={location.pathname === "/experience" ? "active" : ""}>Experience</Link></li>
        <li><a href="/contact" onClick={closeMenu} className={location.hash === "/contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
