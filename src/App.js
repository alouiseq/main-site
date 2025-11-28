import React from 'react';
import experiences from './assets/dataFiles/experiences.json';
import './App.scss';

const sections = ['home', 'journey', 'contact'];
const SCROLL_THRESHOLD = -100; // Threshold for detecting current section

const App = () => {
  const getCurrentSectionIndex = () => {
    return sections.findIndex((id) => {
      const section = document.getElementById(id);
      return section.getBoundingClientRect().top > SCROLL_THRESHOLD;
    });
  };

  const scrollToSection = (index) => {
    document.getElementById(sections[index]).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollUp = () => {
    const currentIndex = getCurrentSectionIndex();
    const previousIndex = Math.max(currentIndex - 1, 0);
    scrollToSection(previousIndex);
  };

  const scrollDown = () => {
    const currentIndex = getCurrentSectionIndex();
    const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
    scrollToSection(nextIndex);
  };

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main id="main-content">
        <section id="home" className="comic-section home-background" aria-label="Home">
          <div className="home-image" role="img" aria-label="Profile image with animals" />
        </section>
        <section id="journey" className="comic-section">
          <h2>My Journey</h2>
          <div className="experience-container">
            {experiences.map((exp, index) => (
              <div key={index} className="experience">
                <h3>{exp.title}</h3>
                <p>{exp.duration}</p>
                <ul>
                  {exp.responsibilities?.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="comic-section">
          <h2>Contact</h2>
          <p>Residing in the sun-kissed landscapes of California, I devote much of my leisure time to nurturing family bonds. The dream that fuels my passions is the aspiration to one day embrace the self-sufficient charm of homesteading.</p>
          <div className="socials">
            <a href="https://twitter.com/flashmatrix24" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
              <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/alouise-quiatchon-b1383b18" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/alouiseq" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </section>
      </main>
      <button className="scroller scroll-up" onClick={scrollUp} aria-label="Scroll to previous section" />
      <button className="scroller scroll-down" onClick={scrollDown} aria-label="Scroll to next section"></button>
      <footer>
        <p>To Be Continued...</p>
      </footer>
    </div>
  );
}

export default App;
