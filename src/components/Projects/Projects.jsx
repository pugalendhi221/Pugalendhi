import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [{
    key: 1,
    projectTitle: "Portfolio Website",
    technologies: ['Css', 'Jsx', 'React-js'],
    year: '2024',
    description: 'This is a responsive website I have built to showcase my skills and knowledge.',
    image: 'src/assets/Projects_logo/Portfolio_pic.JPG'
  },
  {
    key: 2,
    projectTitle: "SSD Controls",
    technologies: ['HTML', 'Css', 'Jsx', 'React-js'],
    year: '2024',
    description: 'This project is a fully functional e-commerce website.',
    image:'src/assets/Projects_logo/comingsoon.jpg'
  }];

  return (
    <div id="Projects" className='projects-main-container'>
      <h1>Projects</h1>
      <p>I have worked on several projects to enhance my skills and knowledge. Here are some of the projects I've completed.</p>

      <div className='overall-card-container'>
        {projects.map(proj => (
          <div className='projects-card-container' key={proj.key}>
            <img src={proj.image} alt={proj.projectTitle}/>
            <div className="technologies">
              {proj.technologies.map(tech => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
            <h2>{proj.projectTitle}</h2>
            <p>{proj.year}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
