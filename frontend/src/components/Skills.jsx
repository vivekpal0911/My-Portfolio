import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>Java, SQL, JavaScript, Python</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>React JS, Node JS, Express JS</p>
          </div>
          <div className="skill-category">
            <h3>Technologies</h3>
            <p>Github, Vs Code, Docker, Git</p>
          </div>
          <div className="skill-category">
            <h3>Familiar</h3>
            <p>Mongo DB, PowerShell scripting, Operating System</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 