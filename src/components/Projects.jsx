import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Adsense: Connecting Brands with Influencers",
      techStack: "React JS, Node JS, MongoDB Atlas",
      description: [
        "Developed a full-stack web platform connecting brands with social media influencers",
        "Integrated user authentication and profile management for both companies and influencers",
        "Implemented a campaign creation and bidding system to match businesses with suitable influencers",
        "Built a real-time dashboard to track campaign performance, reach, and engagement metrics.",
        "Optimized backend performance for fast matchmaking and scalable growth.",
        "Designed a responsive, SEO-friendly UI using vanilla CSS and modern web practices."
      ],
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    },
    {
      title: "LifeLine360*: An Modern HealthCare System",
      techStack: "React JS, Node JS, MongoDB Atlas",
      description: [
        "Collaborated in a team to develop Lifeline360, an all-in-one healthcare platform for patient support and medical services.",
        "Led the frontend development, implementing responsive and user-friendly interfaces using React JS.",
        "Built key modules including appointment booking, health records dashboard, and doctor-patient chat UI.",
        "Ensured cross-device compatibility and accessibility for a wide range of healthcare users.",
        "Used version control (Git) and participated in regular code reviews and agile sprints."
      ],
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.techStack}</p>
              <ul>
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">LIVE</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GITHUB</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 