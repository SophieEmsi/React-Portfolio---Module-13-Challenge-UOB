import React from 'react';
import profileImage from '../assets/profile-image.png';
import Experience from './experience';
import Portfolio from './portfolio';

const Home = ({ handleNavClick }) => {
    return (
      <header>
        <div className="profile-image-frame">
          <img className="profile-image" src={profileImage} alt="Profile" />
        </div>
        <h1>Sophie McNally</h1>
        <h2>Front-End Web Developer</h2>
        <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
        <div className="buttons">
          <button
            className="btn btn-custom btn-primary"
            onClick={() => handleNavClick('portfolioSection')}
          >
            Projects
          </button>
          <button
            className="btn btn-custom btn-primary"
            onClick={() => handleNavClick('experienceSection')}
          >
            Resume
          </button>
        </div>
      </header>
    );
  };
  

export default Home;
