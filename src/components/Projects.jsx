import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  { name: 'FPS', type: 'Game Development', img: '/assets/unity/1.jpg' },
  { name: 'Nature', type: 'Game Development', img: '/assets/unity/2.jpg' },
  { name: 'Shader', type: 'Game Development', img: '/assets/unity/3.jpg' },
  { name: 'Mini Game', type: 'Game Development', img: '/assets/unity/4.jpg' },
  { name: 'React Website', type: 'Website', img: '/assets/website.png' },
];

const frameworks = [
  { name: 'Game Development', totalProjects: 4, totalYears: 2, logo: ['/assets/unity.png', '/assets/unreal.png', '/assets/cpluse.png', '/assets/cSharp.png'] },
  { name: 'React', totalProjects: 1, totalYears: 1, logo: ['/assets/react.svg'] },
];

const Projects = () => {
  const [selectedFramework, setSelectedFramework] = useState(frameworks[0].name);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects = selectedFramework
    ? projects.filter(project => project.type === selectedFramework)
    : projects;

  const selectedFrameworkDetails = frameworks.find(
    framework => framework.name === selectedFramework
  );

  const settings = {
    infinite: true,
    speed: 500, // Increased for smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay speed increased
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const slider = React.useRef(null);

  return (
    <Container>
      <Content>
        <LeftSide>
        <Header>
            {frameworks.map((framework) => (
              <FrameworkCard
                key={framework.name}
                isActive={framework.name === selectedFramework}
                onClick={() => setSelectedFramework(framework.name)}
              >
                <span>{framework.name}</span>
              </FrameworkCard>
            ))}
          </Header>
          <FrameworkDetails>
            <h1>{selectedFrameworkDetails?.name || 'Select a Framework'}</h1>
            <p>Total Projects: {selectedFrameworkDetails?.totalProjects || 0}</p>
            <p>Total Years: {selectedFrameworkDetails?.totalYears || 0}</p>
            <h3>Description</h3>
            <p>Framework-related description goes here.</p>
            <h3>Used</h3>
            <div>
              {selectedFrameworkDetails?.logo.map((logo, index) => (
                <img key={index} src={logo} alt={`${selectedFrameworkDetails.name} logo ${index + 1}`} />
              ))}
            </div>
          </FrameworkDetails>
          <SliderWrapper>
            <StyledArrow className="prev" onClick={() => slider.current.slickPrev()}>
              <FaChevronLeft />
            </StyledArrow>
            <Slider ref={slider} {...settings}>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.name} 
                  initial={{ opacity: 0, y: 50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard>
                    <img src={project.img} alt={project.name} />
                    <h3>{project.name}</h3>
                  </ProjectCard>
                </motion.div>
              ))}
            </Slider>
            <StyledArrow className="next" onClick={() => slider.current.slickNext()}>
              <FaChevronRight />
            </StyledArrow>
          </SliderWrapper>
        </LeftSide>
        <RightSide>
          <SelectedProject key={selectedProject.name}>
            <img src={selectedProject?.img} alt={selectedProject?.name} />
            <h1>{selectedFramework.name}</h1>
          </SelectedProject>
        </RightSide>
      </Content>
    </Container>
  );
};

export default Projects;

// Styled Components
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  font-family: 'Roboto', sans-serif; /* Popular font for portfolios */
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start; /* Changed from center to flex-start */
  gap: 5px; /* Reduced gap */
  margin-left: 10px; /* Reduced margin */
  margin-top: 10px; /* Reduced margin */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; /* Changed from left to flex-start */
    margin-left: 20px;
  }
`;

const FrameworkCard = styled.div`
  cursor: pointer;
  text-align: center;
  color: ${({ isActive }) => (isActive ? '#fff' : '#adb5bd')};
  background-color: ${({ isActive }) => (isActive ? '#ffa200' : '#282c34')};
  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;
  padding: 3px 10px 7px 10px;
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 1.7rem;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const FrameworkDetails = styled.div`
  padding: 20px;
  border-radius: 8px;
  color: white;
  text-align: left;

  h1 {
    color: #ffa200;
    font-size: 1.7rem;
    margin-bottom: 10px;
  }
  p {
    margin-top: 20px;
    color: #adb5bd;
    margin: 5px 0;
    font-size: 1.5rem;
  }
  h3 {
    color: #ffa200; /* Different color for h3 */
    margin: 15px 0 0 0;
    font-size: 1.7rem;
  }

  div {
    margin-top: 10px;
    display: flex; /* Added flex display */
    gap: 10px; /* Optional: Add some gap between logos */
    padding-right: 20px; /* Optional: Add some padding to the left */
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
`;

const ProjectCard = styled.div`
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  margin: 0 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    border-radius: 8px;
    height: auto;
    object-fit: contain;
  }
  h3 {
    color: #ffa200;
    margin-top: 5px;
    text-align: left;
  }
`;

const SelectedProject = styled.div`
  border-radius: 8px;
  color: white;
  text-align: center;

  h1 {
    color: #ffa200;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  img {
    width: 98%;
    border-radius: 8px;
    height: auto;
    object-fit: contain;
    margin-top: 20px;
  }
`;

const SliderWrapper = styled.div`
  position: relative; // Ensure the arrows are positioned relative to this wrapper
  width: 95%;
  padding-top: 20px;
  border: 5px solid #1c2025; // Deeper color
  background-color: #1c2025; // Deeper color
  margin-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }
`;

const StyledArrow = styled.div`
  position: absolute; // Position absolutely within the SliderWrapper
  top: 50%; // Center vertically
  transform: translateY(-50%); // Adjust to align properly
  cursor: pointer;
  z-index: 100; // Ensure it appears above other elements
  transition: transform 0.3s ease, color 0.3s ease; // Smooth transition for hover effects

  &.prev {
    left: 10px; // Position on the left
  }

  &.next {
    right: 10px; // Position on the right
  }

  svg {
    color: #fff; // Color for the arrow icons
    font-size: 24px; // Size for the arrow icons
    padding: 10px; // Padding around the arrow icons
    border-radius: 50%; // Make the arrow icons circular
    position: center; // Center the arrow icons
    border: 2px solid #fff; // Border color for the arrow icons
    background-color: #ffa200; // Background color for the arrow icons
  }

  &:hover {
    svg {
      background-color: #fff; // Background color for the arrow icons
      color: #ffa200; // Change color on hover (golden color)
      transform: scale(1.2); // Slightly enlarge the icon
    }
  }
`;
