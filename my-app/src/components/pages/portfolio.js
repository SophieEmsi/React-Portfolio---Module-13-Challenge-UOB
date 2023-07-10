import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import myImage1 from '../assets/Project 1.png';
import myImage2 from '../assets/Project 2.png';
import myImage3 from '../assets/Project 3.png';
import myImage4 from '../assets/Project 4.png';
import myImage5 from '../assets/Project 5.png';
import myImage6 from '../assets/Project 6.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Ecommerce Website',
      image: myImage1,
      description: 'An E-commerce Website built with Fake Store API',
      url: 'https://levels-e-commerce.netlify.app/',
      url2: 'https://github.com/SophieEmsi/E-commerce-Website'
    },
    {
      id: 2,
      title: 'API Recipe Website',
      image: myImage2,
      description: 'A recipe website built with nutrition in mind and using multiple APIs .',
      url: 'https://sophieemsi.github.io/Edamam-Recipe-Website/',
      url2: 'https://github.com/SophieEmsi/Edamam-Recipe-Website'
    },
    {
      id: 3,
      title: 'Node.js Team Profile Generator',
      image: myImage3,
      description: 'A team profile generater which is created using Node.js in VS Code',
      url: 'https://github.com/SophieEmsi/Team-Profile-Generator---Module-12-Challenge/blob/main/Output/team.html',
      url2: 'https://github.com/SophieEmsi/Team-Profile-Generator---Module-12-Challenge'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: myImage4,
      description: 'A weather dashboard created using a live weather API',
      url: 'https://sophieemsi.github.io/Weather-Dashboard---Module-8-Challenge',
      url2: 'https://github.com/SophieEmsi/Weather-Dashboard---Module-8-Challenge'
    },
    {
      id: 5,
      title: 'Timed Quiz Challenge',
      image: myImage5,
      description: 'A timed quiz of multiple choice questions created using Javascript',
      url: 'https://sophieemsi.github.io/Code-Quiz---Module-6-Challenge/',
      url2: 'https://github.com/SophieEmsi/Code-Quiz---Module-6-Challenge'
    },
    {
      id: 6,
      title: 'Password Generator',
      image: myImage6,
      description: 'A password generator created using Javascript',
      url: 'https://sophieemsi.github.io/Password-Generator---Module-5-Challenge/',
      url2: 'https://github.com/SophieEmsi/Password-Generator---Module-5-Challenge'
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {projects.map((project) => (
        <Card className="portfolio-card mb-4" key={project.id}>
          <Card.Img variant="top" src={project.image} className="project-image" />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <div className="project-links">
              <Button className="custom-button" href={project.url} target="_blank" rel="noopener noreferrer" variant="primary">
                View Project
              </Button>
              <Button className="custom-button" href={project.url2} target="_blank" rel="noopener noreferrer" variant="primary">
                View Repo
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Portfolio;