import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import dogSmall from './assets/illustrations/icons/dog-small.svg';
import chickenSmall from './assets/illustrations/icons/chicken-small.svg';
import './App.scss';

const sections = ['home', 'journey', 'projects', 'contact'];
const SCROLL_THRESHOLD = -100;

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Find the section currently in view
      const currentIndex = sections.findIndex((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top > SCROLL_THRESHOLD;
        }
        return false;
      });

      if (currentIndex !== -1) {
        setActiveSection(sections[currentIndex]);
      } else {
        // If scrolled past all sections, set to last section
        setActiveSection(sections[sections.length - 1]);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navigation activeSection={activeSection} sections={sections} />

      <main id="main-content">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <img src={dogSmall} alt="" className="footer-icon" aria-hidden="true" />
          <p className="footer-tagline">
            Coding by day <span className="sun-emoji">☀️</span> Homesteading by evening <span className="moon-emoji">🌙</span>
          </p>
          <img src={chickenSmall} alt="" className="footer-icon" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
};

export default App;
