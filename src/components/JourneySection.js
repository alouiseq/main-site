import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariant } from '../utils/animationVariants';
import experiences from '../assets/dataFiles/experiences.json';
import './JourneySection.scss';

const JourneySection = () => {
  return (
    <section id="journey" className="journey-section">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Professional Journey</h2>
        <div className="header-accent-line" />
      </motion.div>

      <div className="timeline-container">
        <motion.div
          className="experience-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={cardVariant}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 48px rgba(0, 212, 255, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-corner-accent" />

              <div className="card-header">
                <div className="timeline-dot" />
                <h3>{exp.title}</h3>
              </div>

              <p className="duration tech-label">{exp.duration}</p>

              <ul className="responsibilities">
                {exp.responsibilities?.map((resp, respIndex) => (
                  <li key={respIndex}>
                    <i className="fa fa-check-circle accent-icon" aria-hidden="true" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="card-pattern-overlay" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
