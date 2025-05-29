import React, { useState, useEffect } from 'react';
import './Hero.css';
// Remove the photo import
// import newPhoto from '../assets/new-Photoroom-fotor-bg-remover-20240714225236.png';

function Hero() {
  const name = "Vivek Kumar Pal";
  const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (isTyping) {
      timer = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
        if (displayedName.length === name.length) {
          setIsTyping(false);
        }
      }, 100); // Typing speed
    } else {
      // Optional: add a pause or cursor blinking effect here
    }
    return () => clearTimeout(timer);
  }, [displayedName, isTyping, name]);


  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content centered">
          <p className="greeting">Hello There</p>
          <h1 className="name"><span className="bracket">&lt;</span>I am {displayedName}<span className="bracket">&gt;</span><span className="cursor">|</span></h1> {/* Typing effect applied here */}
          <h2 className="title">Software Developer</h2> {/* Assuming this title based on resume */}
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://linkedin.com/in/vivek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {/* Placeholder for LinkedIn icon */}
               <i className="fab fa-linkedin-in"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:vivekpal0911@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              {/* Placeholder for Email icon */}
               <i className="fas fa-envelope"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://github.com/vivek" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              {/* Placeholder for GitHub icon */}
               <i className="fab fa-github"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73 2.14 16 3.07a5.5 5.5 0 0 0-6 0c-2.73-.93-3.91-.07-3.91-.07A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 3.5 12c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0 0 18 18.13V22"></path></svg>
            </a>
             {/* Add other social media icons as needed, e.g., Instagram, Twitter/X, WhatsApp - using placeholder SVGs */}
             <a href="#" aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
             <a href="#" aria-label="Twitter"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
             <a href="#" aria-label="WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>

          </div>
           {/* Keep the buttons for now, might remove later based on final design */}
           <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Got a project?</a>
            <a href="#contact" className="btn btn-secondary">My resume</a>
          </div>
        </div>
         {/* Placeholder for falling elements */}
      </div>
    </section>
  );
}

export default Hero; 