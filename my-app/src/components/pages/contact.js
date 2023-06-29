import React from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import '../../App.css';

const Contact = () => {
  return (
    <div className="contact-container">
       <h3 style={{ marginBottom: '25px', marginTop: '10px' }}>
          <span className="heading-box">Contact Me</span>
      </h3>
      <div className="contact-icons">
        <a href="mailto:soph_mcnally@msn.com">
          <Email sx={{ fontSize: 50 }} className="icon" />
        </a>
        <a href="https://github.com/SophieEmsi">
          <GitHub sx={{ fontSize: 50 }} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username">
          <LinkedIn sx={{ fontSize: 50 }} className="icon" />
        </a>
      </div>
      <p className="contact-description">
        If you would like to discuss any of my projects or job opportunities, feel free to reach out to me via email,
        GitHub, or LinkedIn.
      </p>
    </div>
  );
};

export default Contact;
