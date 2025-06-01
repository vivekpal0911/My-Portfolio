import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // We will create and use App.css for component-specific styles
// import './index.css'; // We will keep index.css for global styles but clear its content initially
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

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
    <ThemeProvider>
      <Router>
        <div className="logo-fixed-left">
          <img src="/Vivek logo.png" alt="Vivek Logo" />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<div className="section-fade"><About /></div>} />
          <Route path="/skills" element={<div className="section-fade"><Skills /></div>} />
          <Route path="/projects" element={<div className="section-fade"><Projects /></div>} />
          <Route path="/certifications" element={<div className="section-fade"><Certifications /></div>} />
          <Route path="/contact" element={<div className="section-fade"><Contact /></div>} />
        </Routes>
        <Footer />
        <div className="falling-elements">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="falling-item" key={i}></div>
          ))}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
