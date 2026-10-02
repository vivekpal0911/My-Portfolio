import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import {
  FaHome, FaUser, FaBriefcase, FaBuilding, FaCode, FaEnvelope,
  FaBars, FaTimes, FaMoon, FaSun, FaFileDownload,
} from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
  { id: 'experience', label: 'Experience', icon: <FaBuilding /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={(e) => handleNavClick(e, 'home')}>
          Vivek
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar__center">
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span className="navbar__link-icon">{link.icon}</span>
                  <span className="navbar__link-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href="/Vivek%20Kumar%20Pal%20Resume.pdf"
            download="Vivek_Kumar_Pal_Resume.pdf"
            className="navbar__icon-btn navbar__resume-btn"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <FaFileDownload />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'mobile-overlay--open' : ''}`}>
        <div className="mobile-overlay__content">
          <ul className="mobile-overlay__links">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ animationDelay: `${index * 0.06}s` }}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-overlay__link ${activeSection === link.id ? 'mobile-overlay__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span className="mobile-overlay__link-icon">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-overlay__bottom">
            <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a href="/Vivek%20Kumar%20Pal%20Resume.pdf" download="Vivek_Kumar_Pal_Resume.pdf" className="navbar__icon-btn" aria-label="Download Resume">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
