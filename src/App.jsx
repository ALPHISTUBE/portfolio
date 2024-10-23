import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/SkillsIcon';
import SkillsHistogram from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <SkillsHistogram />
      <Projects />
      <Experience />
      <ContactForm />
    </div>
  );
}

export default App;
