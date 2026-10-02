import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About me</h2>
          <p>
            Hi, I’m Vivek Kumar Pal — a Computer Science graduate and Software
            Engineer at Capgemini, based in Bengaluru. I’ve always enjoyed
            understanding how things work and turning ideas into something
            functional through code. I have a strong interest in full-stack
            development and have worked with technologies like Java, JavaScript,
            React, Node.js, MongoDB, and SQL. Throughout my B.Tech, I built
            multiple projects that gave me hands-on experience in developing
            real-world applications and strengthened my problem-solving skills.
            I’m now starting the next chapter of my journey at Capgemini, where
            I’m looking forward to learning, working on real-world challenges,
            and continuously becoming a better engineer.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>2+</h3> {/* Based on projects listed */}
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3>Open</h3>
              <p>To opportunities</p>
            </div>
            <div className="stat-item">
              <h3>Full-stack</h3>
              <p>Development focus</p>
            </div>
          </div>
        </div>
        <div className="about-services">
          <div className="service-item">
            <div className="service-icon">💻</div>
            <h4>Website Development</h4>
          </div>
          <div className="service-item">
            <div className="service-icon">📱</div>
            <h4>App Development</h4> {/* Assuming based on skills */}
          </div>
          <div className="service-item">
            <div className="service-icon">☁️</div>
            <h4>Website Hosting</h4> {/* Assuming based on skills */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
