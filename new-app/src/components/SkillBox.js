import React from "react";
import './SkillBox.css'; // Import the CSS file for styling
import { useState } from 'react';

const SkillBox = ({ skill }) => {
  return (
    <div>
        <div className="skill-box">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
        </div>
    </div>
  );
};

export default SkillBox;
