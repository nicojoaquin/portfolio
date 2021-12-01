import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Sliders from "./Sliders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgs } from "../../data/projects";
import "./projects.css";

const ProjectsContainer = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0.1px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className=" text-center mb-5 p-3 m-3">
      <h1 className="pb-3">My projects</h1>
      <hr />
      <Slider className="pt-5 mx-10 slider" {...settings}>
        {imgs.map((img, idx) => (
          <Sliders key={idx} imgIndex={imgIndex} {...img} idx={idx} />
        ))}
      </Slider>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Link
          to="/"
          className="go btn rounded-pill d-flex align-items-center mt-5 shadow-sm"
        >
          <h4 className="me-3 mt-2">Contact me!</h4>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="5x" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsContainer;
