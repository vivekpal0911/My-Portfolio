import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  // Download handler
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Vivek_Kumar_Pal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section modern-hero-bg">
      <div className="hero-center-content">
        <h1 className="hero-heading colorful-heading">
          <span className="hey">HEY, I am</span>{' '}
          <span className="name-gradient">VIVEK KUMAR PAL</span>
          <span className="react-icon"><i className="fab fa-react"></i></span>
        </h1>
        <p className="hero-subtitle">I am a Software Developer specializing in full stack development.</p>
        <div className="hero-buttons-row">
          <a href="#projects" className="hero-btn primary-btn">
            <span style={{marginRight: '8px'}}>➔</span> See My Projects
          </a>
          <a href="#about" className="hero-btn secondary-btn">
            <span style={{marginRight: '8px'}}>➔</span> More About Me
          </a>
          <button className="hero-btn download-btn" onClick={handleResumeDownload} type="button">
            <FaDownload style={{marginRight: '8px'}} /> Download Resume
          </button>
        </div>
        <div className="hero-social-row">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;