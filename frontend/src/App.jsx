import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
import PetDog from './components/PetDog';
import { ThemeProvider } from './ThemeContext';
import './Minimal.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
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
        <Navbar />
        <main className="main-content">
          <HomePage />
        </main>
        <PetDog />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
