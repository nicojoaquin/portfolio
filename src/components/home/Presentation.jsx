import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Presentation.css";

const Presentation = () => {
  return (
    <div className="d-flex flex-column align-items-center p-5">
      <div className="m-5 d-flex flex-column justify-content-center  text-center">
        <h1 className="mt-3 pt-5 fw-bold lg-5">Nicolás Joaquin</h1>
        <h2 className="mt-3">Front End Web Developer</h2>
        <span className="m-4 fs-5">e-mail: nicojoaquin1998@gmail.com</span>
        <div className="d-flex justify-content-center redes">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            rel="noopener noreferrer"
            target="_blank"
            className="me-4 iconRed"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicojoaquin/"
            rel="noopener noreferrer"
            target="_blank"
            className="me-4 iconRed"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/nicojoaquin"
            rel="noopener noreferrer"
            target="_blank"
            className="me-4 iconRed"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className="m-5 justify-content-center d-flex flex-column justify-content-center">
        <h3 className="text-center">Welcome to my personal website</h3>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link
            to="/about"
            className="go btn rounded-pill d-flex align-items-center mt-5 shadow-sm"
          >
            <h4 className="me-4 mt-2">Let's go!</h4>
            <FontAwesomeIcon icon={faArrowCircleRight} size="5x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
