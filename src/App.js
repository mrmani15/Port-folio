import React, { Fragment } from 'react';
import './App.css';

import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import SkillTech from './Pages/SkillTech'
import Internship from './Pages/Internship'
import Projects from './Pages/Projects'
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <Internship />
      <SkillTech />
      <Projects />
    </Fragment>
  );
}

export default App;
