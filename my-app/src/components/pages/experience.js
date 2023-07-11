import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Skills = () => (
  <div className="right-column">
  <h3 style={{ marginBottom: '25px', marginTop: '10px' }}>
  <span className="heading-box">Skills</span>
</h3>
    <div className="skills-container">
      <div className="skill-category">
        <h4>Languages</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ES6</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Libraries</h4>
        <ul>
          <li>React.js</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Frameworks</h4>
        <ul>
          <li>Node.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Testing</h4>
        <ul>
          <li>Jest</li>
          <li>Insomnia REST</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Design</h4>
        <ul>
          <li>Figma</li>
          <li>User Experience Design</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Programming Interface</h4>
        <ul>
          <li>The DOM</li>
          <li>APIs</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Data Format</h4>
        <ul>
          <li>JSON</li>
        </ul>
      </div>
      <div className="skill-category">
        <h4>Programming Technique</h4>
        <ul>
          <li>AJAX</li>
          <li>Object Oriented Programming (OOP)</li>
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="left-column">
      <h3 style={{ marginBottom: '25px', marginTop: '10px' }}>
          <span className="heading-box">Education</span>
      </h3>
        <div className="education-item">
          <div className="date">Sept 2010 - June 2013</div>
          <div className="description">
            <h3>Nottingham Trent University</h3>
            <p>2:1 - BA (Hons) Marketing, Design & Communication</p>
          </div>
        </div>
        <div className="education-item">
          <div className="date">Feb 2023 - June 2023</div>
          <div className="description">
            <h3>University of Birmingham</h3>
            <p>Front-End Web Development Bootcamp</p>
          </div>
        </div>
        <div>
        <h3 style={{ marginBottom: '25px', marginTop: '10px' }}>
            <span className="heading-box">Full CV</span>
        </h3>
          <p>
            For my complete work history and qualifications, please refer to my{' '}
            <a href={require('../assets/Sophie McNally CV July 23.pdf')} target="_blank" rel="noopener noreferrer">
              Full CV
            </a>
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Experience;
