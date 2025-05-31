import React from 'react';
import './Skills.css';
import { FaCode, FaCubes, FaTools, FaDatabase } from 'react-icons/fa';

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="subtitle">Here's a collection of my core technical skills and tools I use in my projects.</div>
        <div className="skills-grid">
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <div className="skill-title">Languages</div>
            <div className="skill-desc">Java, SQL, JavaScript, Python</div>
          </div>
          <div className="skill-card">
            <FaCubes className="skill-icon" />
            <div className="skill-title">Frameworks</div>
            <div className="skill-desc">React JS, Node JS, Express JS</div>
          </div>
          <div className="skill-card">
            <FaTools className="skill-icon" />
            <div className="skill-title">Technologies</div>
            <div className="skill-desc">Github, Vs Code, Docker, Git</div>
          </div>
          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <div className="skill-title">Familiar</div>
            <div className="skill-desc">Mongo DB, PowerShell scripting, Operating System</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 