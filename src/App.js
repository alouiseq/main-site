import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <section id="home" className="game-section">
          <h2>Hey, I'm Alouise Quiatchon</h2>
        </section>
        <section id="journey" className="game-section">
          <h2>My Journey</h2>
          <div className="experience-container">
            <div className="experience">
            <h3>Fullstack Engineer at Pathstream</h3>
              <p>11/2019 - Present</p>
              <ul>
                <li>Responsibility or Achievement #1</li>
                {/* ... additional responsibilities or achievements ... */}
              </ul>
            </div>
            <div className="experience">
              <h3>Software Engineer at Syapse</h3>
              <p>02/2016 - 11/2019</p>
              <ul>
                <li>Develop enterprise software including integrated patient records, molecular tumor board workflows, and clinical trials prescreen matching to help doctors and hospitals provide the best care to cancer patients through precision medicine and scaling our customer base from 3 to 7 nationwide and 2 in Asia.</li>
                <li>Contributor to 2 architectural changes that led to the transition from a monolithic application to micro services while supporting and releasing new features to over 5 customers in the current system in a timely manner.</li>
                Build a precision oncology data and knowledge sharing network with over 400 health systems and impacting over 250k cancer patients a year to share and learn from real world clinical, molecular, treatment, and outcomes data.
                {/* ... additional responsibilities or achievements ... */}
              </ul>
            </div>
            <div className="experience">
            <h3>Front-End Engineer at Shutterfly</h3>
              <p>06/2015 - 02/2016</p>
              <ul>
                <li>Designed and implemented a web monitoring application that provides a ‘at a glance’ view of health dashboards across various production servers which saved 10+ hours of engineering and management downtime efforts on a weekly basis.</li>
                <li>Built dynamic charting visualizations to compare preconfigured service-level agreements and their respective data from tests retrieved from an external real-time analytics system.</li>
                <li>Created a centralized server outage reporting system to focus on identifying and resolving system/server issues.</li>
                {/* ... additional responsibilities or achievements ... */}
              </ul>
            </div>
            <div className="experience">
            <h3>UI Developer at GE Software</h3>
              <p>09/2014 - 06/2015</p>
              <ul>
                <li>Developed a diagnostics and monitoring web interface that provides interactive data visualizations of real time performance saving $150M+ annually due to oil & gas equipment repair and unplanned downtime.</li>
                <li>Created extensible and reusable widgets that can scale with growth and across different business needs.</li>
                <li>Implemented an email-like case management application for users to interact, identify, and predict machine behaviors that can prolong life expectancy and increase revenue by $7M/week.</li>
                {/* ... additional responsibilities or achievements ... */}
              </ul>
            </div>
            <div className="experience">
            <h3>Education</h3>
              <p>09/2007 - 05/2012</p>
              <ul>
                <li>B.S. & M.S. in Computer Engineering @ San Jose State University</li>
                {/* ... additional responsibilities or achievements ... */}
              </ul>
            </div>
            {/* ... more work experiences ... */}
          </div>
        </section>
        <section id="contact" className="game-section">
          {/*<h2>Contact the Hero</h2>*/}
          <p>Residing in the sun-kissed landscapes of California, I devote much of my leisure time to nurturing family bonds. The dream that fuels my passions is the aspiration to one day embrace the self-sufficient charm of homesteading.</p>
          <div className="socials">
            <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            {/* ... other socials ... */}
          </div>
        </section>
      </main>
      <footer>
        <p>To Be Continued...</p>
      </footer>
    </div>
  );
}

export default App;
