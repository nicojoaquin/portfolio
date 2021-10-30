import React from 'react'

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import sass from "../../assets/sass.png"
import bs from "../../assets/bootstrap.png"
import js from "../../assets/js.png"
import jQuery from "../../assets/jQuery.png"
import react from "../../assets/react.png"
import git from "../../assets/git.png"
import gh from "../../assets/gitHub.png"

import "./about.css"

const skills = [
  {
  img: html,
  name: "HTML"
  },
  {
  img: css,
  name: "CSS"
  },
  {
  img: sass,
  name: "Sass"
  },
  {
  img: bs,
  name: "Bootstrap"
  },
  {
  img: js,
  name: "JavaScript"
  },
  {
  img: jQuery,
  name: "jQuery"
  },
  {
  img: react,
  name: "React"
  },
  {
  img: git,
  name: "Git"
  },
  {
  img: gh,
  name: "GitHub"
  }
]

const Skills = () => {
  return (
    <div className="skills">
      {
        skills.map (({img, name}) => 
          <div className="skill d-flex align-items-center w-75 overflow-hidden">
            <img className="skill-img" src={img} alt={name} />
            <h5>{name}</h5>
          </div>
        )
      }
    </div>
  )
}

export default Skills
