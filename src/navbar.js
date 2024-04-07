import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import the CSS file
import Logo from './images/Logo.png'

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg"> {/* Apply the custom class here */}
      <Navbar.Brand href="#home">
        <img
           src={Logo} // Use the imported logo as src
           height="25" // Adjust the height as needed
           style={{ marginLeft: '30px' }} // Add margin to separate from other elements
           className="align-top"
           alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links-left">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
