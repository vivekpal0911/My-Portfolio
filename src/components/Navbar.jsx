import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand"><span className="bracket">&lt;</span>Vivek Kumar Pal<span className="bracket">&gt;</span></div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 