import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Vivek Kumar Pal. All rights reserved.</span>
        <div className="footer-social">
          <a href="https://github.com/vivek" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/vivek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="mailto:vivekpal0911@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 