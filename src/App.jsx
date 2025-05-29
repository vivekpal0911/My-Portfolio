import React from 'react';
import './App.css'; // We will create and use App.css for component-specific styles
// import './index.css'; // We will keep index.css for global styles but clear its content initially
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Communication from './components/Communication';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Hobbies />
      <Communication />
      <Contact />
      <div className="falling-elements">
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
        <div className="falling-item"></div>
      </div>
    </div>
  );
}

export default App;
