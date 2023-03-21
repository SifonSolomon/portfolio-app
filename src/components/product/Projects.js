import React, { useState, useEffect } from 'react';
import './projects.css'

function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SifonSolomon/repos')
      .then(response => response.json())
      .then(data => {
        const filteredProjects = data.filter(project => (
          project.name === 'altschool-vue-exam' || 
          project.name === 'SifonSolomon.github.io' || 
          project.name === 'typing-game'
        ));
        setProjects(filteredProjects);
      });
  }, []);

  const getThumbnailUrl = (project) => {
    const thumbnailUrl = project?.homepage?.match(/\.(png|jpg|jpeg|gif)$/i);
    return thumbnailUrl ? project.homepage : project.owner.avatar_url;
  };


  return (
    // <div>
    //   {projects.map(project => (
    //     <div key={project.id}>
    //       <h2>{project.name}</h2>
    //       <p>{project.description}</p>
    //       <a href={project.html_url}>View on GitHub</a>
    //     </div>
    //   ))}
    // </div>
    <div>
    <h2>My Favorite Github Projects</h2>
    <ul className="projects-list">
      {projects.map(project => (
        <li key={project.id} className="project-card">
          <div className="thumbnail-container">
            <img
              className="thumbnail-image"
              src={getThumbnailUrl(project)}
              alt={`${project.name} thumbnail`}
            />
          </div>
          <div className="project-details">
            <a href={project.html_url}>{project.name}</a>
            <p>{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Projects;