import React from 'react';
import { FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './Experience.css';

const experienceHighlights = [
  {
    icon: FaCode,
    title: 'Full-stack development',
    description:
      'Build responsive web applications with React, Node.js, Express, and MongoDB.',
  },
  {
    icon: FaUsers,
    title: 'Collaborative delivery',
    description:
      'Contribute to team projects with Git, code reviews, and iterative development.',
  },
  {
    icon: FaLightbulb,
    title: 'Problem solving',
    description:
      'Turn product ideas into clear, accessible interfaces and maintainable solutions.',
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section section scroll-reveal">
      <div className="container">
        <div className="section-header experience-section__header">
          <span className="section-label">Experience</span>
          <h2 className="section-heading">How I build software</h2>
          <p className="section-subtitle">
            Hands-on experience across the full development cycle, from thoughtful
            interfaces to dependable backend services.
          </p>
        </div>

        <div className="experience-grid">
          {experienceHighlights.map(({ icon, title, description }, index) => (
            <article
              className={`experience-card scroll-reveal scroll-reveal-delay-${index + 1}`}
              key={title}
            >
              <span className="experience-card__icon" aria-hidden="true">
                {React.createElement(icon)}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
