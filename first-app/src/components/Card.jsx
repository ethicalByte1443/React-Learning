import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({profile}) => {
  return (
    <div className="card">
      <img src={profile.url} alt="Logo" className="card-logo" />
      <h2 className="card-title">{profile.name}</h2>
      <p className="card-text">
        {profile.text}
      </p>
    </div>
  );
};

export default Card;
