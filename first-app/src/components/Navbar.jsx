import React from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">My Website</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
