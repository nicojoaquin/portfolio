import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { Carousel } from "3d-react-carousal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";

const ProjectsContainer = () => {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    setSlide(
      projects.map((img) => (
        <div>
          <div className="card bg-dark w-100">
            <img src={img.src} alt="proyect" />
            <p>{img.desc}</p>
            <div className="d-flex aling-items-center justify-content-center fs-3">
              <a
                href={img.repoLink}
                rel="noopener noreferrer"
                target="_blank"
                className="me-3 pr-links"
              >
                Code
              </a>
              <a
                href={img.pageLink}
                rel="noopener noreferrer"
                target="_blank"
                className="pr-links"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      ))
    );
  }, []);

  return (
    <div className="text-center w-100 mt-5 p-3" style={{ heigth: 100 }}>
      <h1 className="mt-5">My projects</h1>
      <hr className="mb-3" />
      <Carousel slides={slide} autoplay={false} />
    </div>
  );
};

export default ProjectsContainer;
