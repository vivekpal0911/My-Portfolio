import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUser, FaBriefcase, FaCode, FaCertificate, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Helper for nav links
  const navLinks = [
    { to: '/', icon: <FaHome />, title: 'Home' },
    { to: '/about', icon: <FaUser />, title: 'About' },
    { to: '/projects', icon: <FaBriefcase />, title: 'Projects' },
    { to: '/skills', icon: <FaCode />, title: 'Technical Skills' },
    { to: '/certifications', icon: <FaCertificate />, title: 'Certifications' },
    { to: '/contact', icon: <FaEnvelope />, title: 'Contact' },
  ];

  // Mobile drawer menu
  const MobileDrawer = () => (
    <div className="mobile-drawer-overlay mobile-only">
      <div className="mobile-drawer-header">
        <img src="/Vivek logo.png" alt="Logo" className="mobile-drawer-logo" />
        <button className="mobile-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
          <FaTimes />
        </button>
      </div>
      <ul className="mobile-drawer-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
              onClick={() => setDrawerOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Theme Toggle Button - Desktop Only */}
      <div className="theme-navbar-btn-wrapper desktop-only">
        <button
          className="theme-fab-btn"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      {/* Nav Toggle - Only Mobile */}
      <div className="theme-navbar-btn-wrapper mobile-only">
        <button
          className="fab-btn"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Sidebar Navbar */}
      <nav className="sidebar-navbar sidebar-right">
        <ul className="sidebar-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={location.pathname === link.to ? 'active' : ''} title={link.title}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer (only on mobile) */}
      {drawerOpen && <MobileDrawer />}
    </>
  );
}

export default Navbar;
