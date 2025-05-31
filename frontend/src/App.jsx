import React, { useEffect, useState } from 'react';
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
  // Demo: Fetch backend health status
  const [health, setHealth] = useState(null);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/health`)
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(() => setHealth({ status: 'Backend not reachable' }));
  }, []);

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
      {/* Demo: Show backend health status */}
      <div style={{ margin: '2rem', color: '#00f0ff', fontWeight: 'bold' }}>
        Backend Health: {health ? JSON.stringify(health) : 'Checking...'}
      </div>
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
