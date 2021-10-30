import React from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import sass from "../../assets/sass.png"
import bs from "../../assets/bootstrap.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import git from "../../assets/git.png"
import gh from "../../assets/gitHub.png"

import "./about.css"


const Skills = () => {
  return (
    <div className="skills">
      <div className="d-flex align-items-center">
        <img className="skill-img" src={html} alt="html" />
        <h5>HTML</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={css} alt="css" />
        <h5>CSS</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={sass} alt="sass" />
        <h5>Sass</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={bs} alt="bootstrap" />
        <h5>Bootstrap</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={js} alt="js" />
        <h5>JavaScript</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={react} alt="react" />
        <h5>React (Learning)</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={git} alt="git" />
        <h5>GIT</h5>
      </div>
      <div className="d-flex align-items-center">
        <img className="skill-img" src={gh} alt="github" />
        <h5>GitHub</h5>
      </div>
    </div>
  )
}

export default Skills
