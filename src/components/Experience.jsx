// components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const experience = [
  { title: 'Software Engineer', company: 'Tech Co', duration: '2019 - Ongoing', description: 'Worked on full-stack applications.' },
  { title: 'Unity Developer', company: 'Game Studio', duration: '2017 - 2019', description: 'Developed indie games for mobile platforms.' },
];

const Experience = () => {
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <Timeline>
        {experience.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}>
            <ExperienceCard>
              <h3>{exp.title} @ {exp.company}</h3>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </ExperienceCard>
          </motion.div>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  padding: 50px;
  background-color: #ffffff;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExperienceCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;
