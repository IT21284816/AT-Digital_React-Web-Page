// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>AT DIGITAL</h2>
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
        </div>
        <div className="footer-section">
          <h3>Our Technologies</h3>
          <ul>
            {['ReactJS', 'Gatsby', 'NextJS', 'NodeJS'].map(tech => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            {['Social Media Marketing', 'Web & Mobile App Development', 'Data & Analytics'].map(service => <li key={service}>{service}</li>)}
          </ul>
        </div>
        <div className="footer-links">
          Privacy Policy | Terms & Conditions
        </div>
      </div>
    </footer>
  );
}

export default Footer;
