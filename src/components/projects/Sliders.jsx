import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'

import "./projects.css"

const Sliders = ({imgIndex, src, desc, idx, repoLink, pageLink}) => {

  return (   
      
    <div className={`w-100 card bg-dark slide ${idx === imgIndex && "activeSlide"}`}>
      <img className="card-img-top slider-img" src={src} alt="proyect" />
      <div className="card-body">
        <p>
          {desc}
        </p>
        <div className= "bg-secondary rounded-pill d-flex justify-content-evenly">
          <a href={repoLink} rel="noopener noreferrer" target="_blank" className="card-link p-2 gitHub"><FontAwesomeIcon icon={ faGithub } size="3x" /></a>
          <a href={pageLink} rel="noopener noreferrer" target="_blank" className="card-link p-2 page"><FontAwesomeIcon icon={faWindowMaximize} size= "3x" /></a>
        </div> 
      </div>
    </div>  

  )

}

export default Sliders
