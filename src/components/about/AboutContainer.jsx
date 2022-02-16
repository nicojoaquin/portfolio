import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./about.css";

const AboutContainer = () => {
  return (
    <div className="d-flex justify-content-center mb-5 p-5">
      <div>
        <div className="pt-2 pr-2  d-flex justify-content-between">
          <div>
            <h2>
              Name: <br />
              Nicolás
            </h2>
            <h2>
              Last Name: <br /> Joaquin
            </h2>
            <h2>
              Country: <br /> Argentina
            </h2>
            <h2 className="pt-4">Description:</h2>
          </div>
          <aside className="aside">
            <Link
              to="/projects"
              className="go btn rounded-pill d-flex align-items-center  mt-5  shadow-sm w-100"
            >
              <h4 className="me-3 mt-2">Let's look at my projects!</h4>
              <FontAwesomeIcon icon={faArrowCircleRight} size="6x" />
            </Link>
          </aside>
        </div>
        <br />
        <p className="desc">
          Front End and Back End web developer, coding lover, ready to learn and
          improve.
          <br />
          Always trying to put all my effort and my dedication in everything
          that I develop, to do it in the best way possible.
          <br />
          I like to create responsive websites with different functionalities.
          <br />
          My objective is to grow and acquire all the necessary knowledge to be
          a good professional.
        </p>
        <h2 className="fs-4 pt-4">Skills:</h2>
        <hr />
        <Skills />
      </div>
    </div>
  );
};

export default AboutContainer;
