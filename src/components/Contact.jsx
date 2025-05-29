import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p>Feel free to reach out to me for collaborations or just a friendly chat!</p>
          <p>&#9742; +91 7061547485</p>
          <p>&#9993; <a href="mailto:vivekpal0911@gmail.com">vivekpal0911@gmail.com</a></p>
          <p>&#xe901; <a href="https://linkedin.com/in/vivek" target="_blank" rel="noopener noreferrer">linkedin.com/in/vivek</a></p>
          <p>&#xea2b; <a href="https://github.com/vivek" target="_blank" rel="noopener noreferrer">github.com/vivek</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact; 