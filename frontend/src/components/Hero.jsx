import React from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import "./Hero.css";

function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vivek%20Kumar%20Pal%20Resume.pdf";
    link.download = "Vivek_Kumar_Pal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Hero ambient glow — localized to hero */}
      <div className="hero__glow hero__glow--purple" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--pink" aria-hidden="true"></div>

      <div className="hero__container">
        <div className="hero__content">
          <h2 className="hero__greeting">
            Hi, I'm <span className="gradient-text">Vivek</span>
          </h2>

          <h1 className="hero__title">Software Engineer</h1>

          <p className="hero__description">
            Software Engineer specializing in full-stack development, building
            modern and scalable web applications with React, Node.js, and modern
            technologies.
          </p>

          <div className="hero__buttons">
            <button
              className="hero__btn hero__btn--primary"
              onClick={scrollToProjects}
            >
              View My Work
              <span className="hero__btn-arrow">→</span>
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={scrollToContact}
            >
              Get In Touch
            </button>
            <button
              className="hero__btn hero__btn--ghost"
              onClick={handleResumeDownload}
            >
              <FaDownload />
              Resume
            </button>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/vivekpal0911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/vivekpal0911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:vivekpal0911@gmail.com"
              aria-label="Email"
              className="hero__social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Scroll Indicator
        <button className="hero__scroll-indicator" onClick={scrollToProjects} aria-label="Scroll to projects">
          <span>Scroll to projects</span>
          <FaChevronDown className="hero__scroll-arrow" />
        </button> */}
      </div>
    </section>
  );
}

export default Hero;
