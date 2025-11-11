import logoImage from '../assets/images/logo.png';
 
import React, { useState } from "react";
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#home" className="logo">
                  <img src={logoImage} alt="services" />
                  <h4>
                    SHAR<span>MILA</span>
                  </h4>
                </a>
                <ul className={`nav ${menuOpen ? "open" : ""}`}>
                  <li className="scroll-to-section">
                    <a href="/" onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/Education" onClick={() => setMenuOpen(false)}>
                    Education
                  </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/skills" onClick={() => setMenuOpen(false)}>
                    Skills</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/projects" onClick={() => setMenuOpen(false)}>
                    Project</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/experience" onClick={() => setMenuOpen(false)}>
                    Experience</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#blog">Contact</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Home;
