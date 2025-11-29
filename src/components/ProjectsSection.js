import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariant } from '../utils/animationVariants';
import projects from '../assets/dataFiles/projects.json';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/images/projects/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  const getAllTechStack = (techStack) => {
    const allTech = [];
    if (techStack.frontend) allTech.push(...techStack.frontend);
    if (techStack.backend) allTech.push(...techStack.backend);
    if (techStack.deployment) allTech.push(...techStack.deployment);
    if (techStack.storage) allTech.push(...techStack.storage);
    return allTech;
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Featured Projects</h2>
        <div className="header-accent-line" />
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariant}
            whileHover={{
              y: -10,
              boxShadow: "0 16px 48px rgba(0, 212, 255, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image-container">
              {project.image && (
                <img
                  src={getImagePath(project.image)}
                  alt={`${project.name} screenshot`}
                  className="project-image"
                  loading="lazy"
                />
              )}
              <div className="image-overlay">
                <div className="overlay-links">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-link"
                    aria-label={`View ${project.name} live site`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa fa-external-link" aria-hidden="true" />
                    <span>Live Site</span>
                  </motion.a>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-link"
                      aria-label={`View ${project.name} on GitHub`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fa fa-github" aria-hidden="true" />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.name}</h3>
                {project.tagline && (
                  <p className="tagline tech-label">{project.tagline}</p>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                <span className="tech-stack-label tech-label">Tech Stack</span>
                <div className="tech-badges">
                  {getAllTechStack(project.techStack).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                  aria-label={`Visit ${project.name}`}
                >
                  <i className="fa fa-external-link" aria-hidden="true" />
                  View Live
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                    aria-label={`View ${project.name} source code`}
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="card-corner-accent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
