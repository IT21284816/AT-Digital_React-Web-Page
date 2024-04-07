// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
          <h2>AT DIGITAL</h2>
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
        </div>
        <div className="footer-section">
          <h4>Our Technologies</h4>
          <ul>
          <li>ReactJS</li>
          <li>Gatsby</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          

          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Social Media Marketing</li>
            <li>Web & Mobile App</li>
            <li>Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
        
      </div>
      <div className="footer-links">
          Privacy Policy | Terms & Conditions
        </div>
    </footer>
  );
}

export default Footer;
