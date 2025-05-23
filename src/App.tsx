import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-10">
          <Header />
          <About />
          <Projects />
          <Skills />
          <Certificates />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;