import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../utils/animationVariants';
import codeBracket from '../assets/illustrations/icons/code-bracket.svg';
import chicken from '../assets/illustrations/icons/chicken-enhanced.svg';
import dog from '../assets/illustrations/icons/dog.svg';
import './ContactSection.scss';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fa-github',
      url: 'https://github.com/alouiseq',
      description: 'Code repositories'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/alouise-quiatchon-b1383b18',
      description: 'Professional network'
    },
    {
      name: 'Twitter',
      icon: 'fa-twitter',
      url: 'https://twitter.com/flashmatrix24',
      description: 'Thoughts & updates'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2>Let's Connect</h2>

          <p className="intro-text">
            Building digital products by day, tending to chickens and German Shepherd / Huskies by evening.
          </p>

          <div className="lifestyle-showcase">
            <motion.div
              className="lifestyle-card"
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0, 212, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-circle">
                <img src={codeBracket} alt="" aria-hidden="true" />
              </div>
              <h4>Tech & Engineering</h4>
              <p>Building scalable web applications and precision software</p>
            </motion.div>

            <motion.div
              className="lifestyle-card"
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(29, 211, 176, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-circle">
                <img src={dog} alt="" aria-hidden="true" />
              </div>
              <h4>Family & Dogs</h4>
              <p>Two German Shepherd/Husky mixes keeping life interesting</p>
            </motion.div>

            <motion.div
              className="lifestyle-card"
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(255, 184, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-circle">
                <img src={chicken} alt="" aria-hidden="true" />
              </div>
              <h4>Homesteading</h4>
              <p>Chickens, self-sufficiency, and the California dream</p>
            </motion.div>
          </div>

          <p className="location-text">
            <i className="fa fa-map-marker" aria-hidden="true" /> Based in sunny California
          </p>
        </motion.div>

        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h3>Find Me Online</h3>

          <div className="social-cards">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} profile`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fa ${social.icon} fa-2x`} aria-hidden="true" />
                <div>
                  <h4>{social.name}</h4>
                  <p>{social.description}</p>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
