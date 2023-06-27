import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/pages/navbar.js';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Home from './components/pages/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'homeSection',
    };
  }

  handleNavClick = (sectionId) => {
    this.setState({ activeSection: sectionId }, () => {
      if (sectionId !== 'homeSection') {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionOffsetTop =
            sectionElement.getBoundingClientRect().top +
            window.pageYOffset -
            document.documentElement.clientTop;
          window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth',
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  renderSection = () => {
    switch (this.state.activeSection) {
      case 'aboutSection':
        return <About />;
      case 'contactSection':
        return <Contact />;
      case 'experienceSection':
        return <Experience />;
      case 'portfolioSection':
        return <Portfolio />;
      default:
        return null;
    }
  };

  render() {
    const headings = [
      { id: 'homeSection', title: 'Home' },
      { id: 'aboutSection', title: 'About Me' },
      { id: 'contactSection', title: 'Contact' },
      { id: 'experienceSection', title: 'Experience' },
      { id: 'portfolioSection', title: 'Portfolio' },
    ];

    return (
      <div>
        <Navbar
          headings={headings}
          activeSection={this.state.activeSection}
          handleNavClick={this.handleNavClick}
        />

        <div className="jumbotron">
          <Home handleNavClick={this.handleNavClick} />
        </div>

        <div className="container mt-4">
          <div id="aboutSection">
            {this.state.activeSection === 'aboutSection' && <About />}
          </div>
          <div id="contactSection">
            {this.state.activeSection === 'contactSection' && <Contact />}
          </div>
          <div id="experienceSection">
            {this.state.activeSection === 'experienceSection' && <Experience />}
          </div>
          <div id="portfolioSection">
            {this.state.activeSection === 'portfolioSection' && <Portfolio />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
