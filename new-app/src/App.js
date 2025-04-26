import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SkillBox from "./components/SkillBox";

const App = () => {
  const skills = [
    {
      name: "React",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
      description: "A versatile programming language for the web.",
    },
    {
      name: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      description: "The standard markup language for web pages.",
    },
    {
      name: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      description: "A style sheet language for designing web pages.",
    },
    {
      name: "Python",
      image: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
      description: "A powerful programming language for data science and web development.",
    },
    {
      name: "Java",
      image: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
      description: "A high-level programming language for enterprise applications.",
    },
    {
      name: "SQL",
      image: "https://cdn-icons-png.flaticon.com/512/919/919849.png",
      description: "A language for managing relational databases.",
    },
    {
      name: "Git",
      image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
      description: "Version control system for tracking code changes.",
    },
    {
      name: "Docker",
      image: "https://cdn-icons-png.flaticon.com/512/919/919840.png",
      description: "A tool for containerizing applications.",
    },
  ];

  const [selectedSkill, setSelectedSkill] = React.useState(skills[0]);
  return (
    <div className="App">
      <Navbar logoname={"Aseem"} />
      <div className="skill-container">
        <SkillBox skill={skills[0]} />
        <SkillBox skill={skills[1]} />
        <SkillBox skill={skills[2]} />
        <SkillBox skill={skills[3]} />
        <SkillBox skill={skills[4]} />
        <SkillBox skill={skills[5]} />
        <SkillBox skill={skills[6]} />
        <SkillBox skill={skills[7]} />
        <SkillBox skill={skills[8]} />
      </div>

      
    </div>
  );
};

export default App;
