import React from 'react';
import profileImage from '../assets/profile-image.png';

const Home = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <header>
          <div className="profile-image-frame">
            <img className="profile-image" src={profileImage} alt="Profile" />
          </div>
          <h1>Sophie McNally</h1>
          <h2>Front-End Web Developer</h2>
          <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
        </header>
      </div>
    </div>
  );
};

export default Home;
