import React from 'react';
import { Hero } from '../components';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
