import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Skills from '../src/Components/Skills/Skills';
import Projects from '../src/Components/Projects/Projects';
import Contact from '../src/Components/Contact/Contact';
import Footer from '../src/Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
