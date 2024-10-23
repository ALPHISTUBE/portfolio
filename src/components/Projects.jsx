// components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { color } from 'chart.js/helpers';

const projects = [
  { name: 'FPS', type: 'Unity', img: '/assets/unity/1.jpg' },
  { name: 'Nature', type: 'Unity', img: '/assets/unity/2.jpg' },
  { name: 'Shader', type: 'Unity', img: '/assets/unity/3.jpg' },
  { name: 'Mini Game', type: 'Unity', img: '/assets/unity/4.jpg' },
  { name: 'React Website', type: 'Website', img: '/assets/website.png' },
  // Add more projects
];

const frameworks = [
  { name: 'Unity', totalProjects: 1, totalYears: 2, logo: '/assets/unity.png' },
  { name: 'React', totalProjects: 1, totalYears: 1, logo: '/assets/react.svg' },
  { name: 'AI', totalProjects: 0, totalYears: 0, logo: '/assets/AI.png' },
  { name: 'Blender', totalProjects: 0, totalYears: 0, logo: '/assets/blender.png' },
  { name: 'Unreal', totalProjects: 0, totalYears: 0, logo: '/assets/unreal.png' },
  { name: '.Net', totalProjects: 0, totalYears: 0, logo: '/assets/dotnet.png' },
  { name: 'Photoshop', totalProjects: 0, totalYears: 0, logo: '/assets/ps.png' },
  { name: 'Affer Effect', totalProjects: 0, totalYears: 0, logo: '/assets/ae.png' },
  { name: 'Flutter', totalProjects: 0, totalYears: 0, logo: '/assets/flutter.png' },
  { name: 'Android Studio', totalProjects: 0, totalYears: 0, logo: '/assets/androidS.png' },
];

const Projects = () => {
  const [selectedFramework, setSelectedFramework] = useState(null);

  const filteredProjects = selectedFramework
    ? projects.filter(project => project.type === selectedFramework)
    : projects;

  const selectedFrameworkDetails = frameworks.find(
    framework => framework.name === selectedFramework
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <ProjectsSection>
      <h2 style={{ color: '#ffa200' }}>PROJECTS</h2>
      <FrameworkDetails>
        {frameworks.map((framework, index) => (
          <FrameworkCard key={index} onClick={() => setSelectedFramework(framework.name)}>
            <img id='filter' src={framework.logo} alt={framework.name} />
          </FrameworkCard>
        ))}
      </FrameworkDetails>
      <div style={{ display: 'flex', width: '100%', gap: '20px' }}>
        {selectedFramework && (
          <FrameworkDetailsCard
          className='framework-details'
          style={{ flex: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{selectedFrameworkDetails.name}</h3>
          <p>Total Projects: {selectedFrameworkDetails.totalProjects}</p>
          <p>Total Years: {selectedFrameworkDetails.totalYears}</p>
          </FrameworkDetailsCard>
        )}
        <ProjectList style={{ flex: 2 }}>
          <Slider {...settings}>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
              >
                <ProjectCard>
                  <img src={project.img} alt={project.name} />
                  <h3 style={{color: '#adb5bd'}}>{project.name}</h3>
                </ProjectCard>
              </motion.div>
            ))}
          </Slider>
        </ProjectList>
      </div>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 50px;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: #ffa200;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FrameworkDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const FrameworkCard = styled.div`
  background-color: #444;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  h3 {
    margin: 0;
  }

  #filter {
    width: 50px;
    height: auto;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 20px;
  max-height: 400px;
  width: 100%;
  @media (max-width: 768px) {
    max-height: none;
  }
`;

const ProjectCard = styled.div`
  background-color: #444;
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const FrameworkDetailsCard = styled(motion.div)`
  flex: 1;
  background-color: #333;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  h3 {
    margin-top: 0;
    font-size: 1.5em;
    color: #fff;
  }
  p {
    font-size: 1.2em;
    color: #fff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
