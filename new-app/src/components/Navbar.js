import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = ({logoname}) => {
  return (
    <div className="navbar">
        <h2>{logoname}</h2>
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Contact</li>
        <li className="navbar-item">Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
