import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <Home />
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
