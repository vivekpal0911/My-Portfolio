import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About me</h2>
          <p>
            I am a passionate and driven full-stack web developer with experience in building responsive and user-friendly applications. My skills cover both frontend and backend development, allowing me to create robust and scalable solutions. I enjoy learning new technologies and solving complex problems to deliver high-quality software.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>2+</h3> {/* Based on projects listed */}
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3>-</h3> {/* Placeholder */}
              <p>Client satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>-</h3> {/* Placeholder */}
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className="about-services">
          <div className="service-item">
            {/* Placeholder Icon */}
            <div className="service-icon">💻</div>
            <h4>Website Development</h4>
          </div>
          <div className="service-item">
             {/* Placeholder Icon */}
            <div className="service-icon">📱</div>
            <h4>App Development</h4> {/* Assuming based on skills */}
          </div>
          <div className="service-item">
             {/* Placeholder Icon */}
            <div className="service-icon">☁️</div>
            <h4>Website Hosting</h4> {/* Assuming based on skills */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 