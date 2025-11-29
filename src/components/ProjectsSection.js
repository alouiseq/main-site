import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../utils/animationVariants';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const techStack = ['React', 'Node.js', 'AWS', 'PostgreSQL'];

  return (
    <section id="projects" className="projects-section">
      <div className="coming-soon-container">
        <motion.div
          className="coming-soon-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <motion.i
            className="fa fa-rocket icon-large"
            aria-hidden="true"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <h2>Projects Launching Soon</h2>
          <p>Currently crafting something special. Stay tuned!</p>

          <div className="tech-preview">
            <span className="preview-label tech-label">Tech Stack</span>
            <div className="tech-badges">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-badge"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
