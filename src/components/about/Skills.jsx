import React from "react";
import { skills } from "../../data/skillsData";
import "./about.css";

const Skills = () => {
  return (
    <div className="skills">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="p-2 d-flex align-items-center w-75 overflow-hidden skill"
        >
          <img className="skill-img" src={skill.img} alt={skill.name} />
          <h5>{skill.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Skills;
