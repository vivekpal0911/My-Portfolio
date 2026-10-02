import React from 'react';
import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Vivek Kumar Pal. All rights reserved.</span>
        <div className="footer-social">
          <a href="https://github.com/vivekpal0911" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/vivekpal0911" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="mailto:vivekpal0911@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
