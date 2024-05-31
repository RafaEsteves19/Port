import React from 'react';
import '../styles/components/projects.sass';

const Projects = ({ imageSrc, title, textContent, link }) => {
  return (
    <div className="projects-content">
      <div className="project-content">
        <img className= "project-image "src={imageSrc} alt="imagem" />
        <div className="project-details">
          <h5 className="project-title">{title}</h5>
          <p className="project-text">{textContent}</p>
          <a href={link} className="project-link">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

