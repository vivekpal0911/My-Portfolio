import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUser, FaBriefcase, FaCode, FaCertificate, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="sidebar-navbar sidebar-right">
      <ul className="sidebar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Home">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} title="About">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} title="Projects">
            <FaBriefcase />
          </Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} title="Technical Skills">
            <FaCode />
          </Link>
        </li>
        <li>
          <Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''} title="Certifications">
            <FaCertificate />
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} title="Contact">
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
