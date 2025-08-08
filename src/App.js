import React from 'react';
import experiences from './assets/dataFiles/experiences.json';
import './App.scss';

const sections = ['home', 'journey', 'contact'];

const App = () => {
  const scrollUp = () => {
    const currentIndex = sections.findIndex((id) => {
      const section = document.getElementById(id);
      return section.getBoundingClientRect().top > -100;
    });
    const previousIndex = Math.max(currentIndex - 1, 0);
    document.getElementById(sections[previousIndex]).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    const currentIndex = sections.findIndex((id) => {
      const section = document.getElementById(id);
      return section.getBoundingClientRect().top > -100;
    });
    const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
    document.getElementById(sections[nextIndex]).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="main-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section id="home" className="comic-section home-background">
          <div className="home-image" />
        </section>
        <section id="journey" className="comic-section">
          <h2>My Journey</h2>
          <div className="experience-container">
            {experiences.map((exp, index) => (
              <div className="experience">
                <h3>{exp.title}</h3>
                <p>{exp.duration}</p>
                <ul>
                  {exp.responsibilities?.map((resp) => (
                    <li>{resp}</li>
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
            <a href="https://twitter.com/flashmatrix24" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/alouise-quiatchon-b1383b18" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/alouiseq" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-lg"></i>
            </a>
          </div>
        </section>
      </main>
      <button className="scroller scroll-up" onClick={scrollUp} aria-label="Scroll to previous section" />
      <button className="scroller scroll-down" onClick={scrollDown} aria-label="Scroll to next section">
        <i class="bi bi-arrow-down-circle-fill"></i>
      </button>
      <footer>
        <p>To Be Continued...</p>
      </footer>
    </div>
  );
}

export default App;
