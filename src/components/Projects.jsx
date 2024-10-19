// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const projects = [
  { name: 'Unity Game 1', type: 'Unity', img: '/assets/game1.png' },
  { name: 'React Website', type: 'Website', img: '/assets/website.png' },
  // Add more projects
];

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectList>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}>
            <ProjectCard>
              <img src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 50px;
  background-color: #f8f8f8;
`;

const ProjectList = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    margin-top: 10px;
  }
`;
