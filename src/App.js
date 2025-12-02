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

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently most visible in the viewport
      let maxVisibleSection = sections[0];
      let maxVisibleHeight = 0;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate how much of the section is visible in viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleSection = id;
          }
        }
      });

      setActiveSection(maxVisibleSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttle for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
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
