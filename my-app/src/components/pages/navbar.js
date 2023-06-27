import React from 'react';

class Navbar extends React.Component {
  render() {
    const { headings, activeSection, handleNavClick } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {headings.map((heading, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${
                    activeSection === heading.id ? 'active' : ''
                  }`}
                  href={`#${heading.id}`}
                  onClick={() => handleNavClick(heading.id)}
                >
                  {heading.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
