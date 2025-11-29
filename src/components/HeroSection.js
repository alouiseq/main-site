import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../utils/animationVariants';
import heroIllustration from '../assets/illustrations/hero/hero-illustration.svg';
import './HeroSection.scss';

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById('journey').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient-bg" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <h1>
            <span className="name-text">Alouise Quiatchon</span>
            <span className="tech-label">Fullstack Engineer</span>
          </h1>
          <p className="hero-tagline">
            Building digital experiences at the intersection of{' '}
            <span className="accent">technology</span>,{' '}
            <span className="accent">family</span>, and{' '}
            <span className="accent">homesteading</span>
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToJourney}
            aria-label="Scroll to journey section"
          >
            Explore My Journey
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-illustration"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <img
            src={heroIllustration}
            alt="Tech illustration"
            loading="eager"
          />
          <div className="illustration-glow" />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
