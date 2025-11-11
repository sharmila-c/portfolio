import logoImage from '../assets/images/logo.png';
import React, { useState } from "react";
import { Link } from "react-router-dom"; 

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
              <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
                <img src={logoImage} alt="services" />
                <h4>
                  SHAR<span>MILA</span>
                </h4>
              </Link>

              <ul className={`nav ${menuOpen ? "open" : ""}`}>
                <li className="scroll-to-section">
                  <Link to="/" onClick={() => setMenuOpen(false)}>About</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/projects" onClick={() => setMenuOpen(false)}>Project</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
                </li>
                <li className="scroll-to-section">
                  <a href="#blog" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
              </ul>

              <button className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
