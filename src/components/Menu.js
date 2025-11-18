import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const base = "/portfolio";   // 👈 IMPORTANT for GitHub Pages

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav id="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} className="logo" />
          <span className="logo-text"><i>SHAR<span>MILA</span></i></span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === `${base}/` || location.pathname === `${base}` ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === `${base}/about` ? "active" : ""}>About</Link></li>
          <li><Link to="/education" className={location.pathname === `${base}/education` ? "active" : ""}>Education</Link></li>
          <li><Link to="/skills" className={location.pathname === `${base}/skills` ? "active" : ""}>Skills</Link></li>
          <li><Link to="/projects" className={location.pathname === `${base}/projects` ? "active" : ""}>Project</Link></li>
          <li><Link to="/experience" className={location.pathname === `${base}/experience` ? "active" : ""}>Experience</Link></li>
          <li><Link to="/contact" className={location.pathname === `${base}/contact` ? "active" : ""}>Contact</Link></li>
        </ul>

        <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>

      <ul className={`nav-links-mobile ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Project</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
