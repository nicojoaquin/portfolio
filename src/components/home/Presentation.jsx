import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import "./Presentation.css"

const Presentation = () => {
  return (
    <div className="d-flex flex-column align-items-center p-5v">
      <div className="m-5">
        <h1 className="mt-3 pt-5 fw-bold lg-5">Nicolás Joaquin</h1>
        <h2>Front End Developer</h2>
      </div>
      <div className="m-5">
        <h3>Welcome to my personal website</h3>

        <Link to="/about" className="go btn rounded-pill d-flex align-items-center justify-content-around m-5 pt-3">
          <h4>Lets go!</h4>
          <FontAwesomeIcon icon={ faArrowCircleRight } size="8x" />
        </Link>

      </div>
    </div>
  )
}

export default Presentation
