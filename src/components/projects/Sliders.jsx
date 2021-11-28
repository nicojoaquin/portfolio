import React from "react";

import "./projects.css";

const Sliders = ({ imgIndex, src, desc, idx, repoLink, pageLink }) => {
  return (
    <div
      className={`w-100 card bg-dark slide ${
        idx === imgIndex && "activeSlide"
      }`}
    >
      <img className="card-img slider-img" src={src} alt="proyect" />
      <div className="m-2">
        <p>{desc}</p>
        <div className="d-flex aling-items-center justify-content-center fs-5">
          <a
            href={repoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="me-3 pr-links"
          >
            Code
          </a>
          <a
            href={pageLink}
            rel="noopener noreferrer"
            target="_blank"
            className="pr-links"
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
