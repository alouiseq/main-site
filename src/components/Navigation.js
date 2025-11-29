import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.scss';

const Navigation = ({ activeSection, sections }) => {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <div className="nav-backdrop" />

      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              aria-current={activeSection === section ? 'page' : undefined}
            >
              {section}

              {activeSection === section && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
