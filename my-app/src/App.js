import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './App.css';

import About from './components/pages/about';
import Experience from './components/pages/experience';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

import bannerImage from './components/assets/Banner.png';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Left Side */}
        <div className="left-side">
          <header>
            <h1>Sophie McNally</h1>
            <h2>Front-End Web Developer</h2>
            <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
          </header>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link as={Link} to="/about" eventKey="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/experience" eventKey="/experience" className="nav-link">Experience</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </div>
        <div className="center-image">
          <img src={bannerImage} alt="Image" className="custom-image" />
        </div>
        {/* Right Side */}
        <div className="right-side">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
