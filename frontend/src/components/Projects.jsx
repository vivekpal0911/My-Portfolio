import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import lifelineImg from '../assets/lifeline360.png';
import adsenseImg from '../assets/adsense.png';

function Projects() {
  const projects = [
    {
      title: "Adsense: Connecting Brands with Influencers",
      image: adsenseImg,
      techStack: [
        { name: "React JS", icon: <FaReact color="#61DAFB" /> },
        { name: "Node JS", icon: <FaNodeJs color="#339933" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
      ],
      description: [
        "A full-stack platform that connects brands with social-media influencers.",
        "Includes authentication, profile management, campaign bidding, and analytics.",
        "Designed for a responsive, SEO-friendly experience."
      ],
      liveLink: null,
      githubLink: null,
    },
    {
      title: "LifeLine360*: An Modern HealthCare System",
      image: lifelineImg,
      techStack: [
        { name: "React JS", icon: <FaReact color="#61DAFB" /> },
        { name: "Node JS", icon: <FaNodeJs color="#339933" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
      ],
      description: [
        "A team-built healthcare platform for patient support and medical services.",
        "Led responsive React interfaces for booking, health records, and chat.",
        "Built with accessibility and cross-device use in mind."
      ],
      liveLink: null,
      githubLink: null,
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge" title={tech.name}>
                      {tech.icon}
                    </span>
                  ))}
                </div>
                <ul>
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {(project.liveLink || project.githubLink) && (
                  <div className="project-links">
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">LIVE</a>}
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GITHUB</a>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
