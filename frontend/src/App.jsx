import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';
import Testimonials from './components/Testimonials';
import { ThemeProvider } from './ThemeContext';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <GitHubStats />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  // Global scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeElements = () => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
        observer.observe(el);
      });
    };

    // Initial + watch for DOM changes (route changes)
    observeElements();
    const mutationObs = new MutationObserver(() => {
      requestAnimationFrame(observeElements);
    });
    mutationObs.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {/* Ambient Background Glow */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-glow ambient-glow--purple"></div>
          <div className="ambient-glow ambient-glow--pink"></div>
          <div className="ambient-glow ambient-glow--rose"></div>
        </div>

        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
