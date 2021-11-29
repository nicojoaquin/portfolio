import React, { useState } from "react";
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
    slidesToShow: 2,
    speed: 500,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="d-flex justify-content-center text-center mb-5">
      <div className="m-5 p-3  text-center w-100  p-5">
        <h1 className="pb-3">My projects</h1>
        <hr />
        <Slider className="pt-5 mx-10" {...settings}>
          {imgs.map((img, idx) => (
            <Sliders key={idx} imgIndex={imgIndex} {...img} idx={idx} />
          ))}
        </Slider>
        <div className="d-flex justify-content-center"></div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
