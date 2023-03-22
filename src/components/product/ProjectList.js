import React from 'react';
import Projects from './Projects';
import calc from  '../../img/calc.png'
import counter from '../../img/counter.png'
import user from '../../img/user.png'

const ProjectList = () => {
  const projects = [
    {
      title: 'User App',
      description: 'This is a user app that fetches users with an api using react and css',
      imageSrc: {user},
      link: 'https://user-app-weld.vercel.app/'
    },
    {
      title: 'Calculator App',
      description: 'This is a calculator built using react and styled with css              ',
      imageSrc: {calc},
      link: 'https://react-calculator-delta-rose.vercel.app/'
    },
    {
      title: 'Counter App',
      description: 'This is a counter app built using vue and styled with css               ',
      imageSrc: {counter},
      link: 'https://counter-app-gamma-three.vercel.app/'
    }
  ];

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Projects
          key={project.title}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectList;