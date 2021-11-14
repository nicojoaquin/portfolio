import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick"
import Sliders from "./Sliders"
import hardStore from "../../assets/projects/hardStore.png"
import storeLu from "../../assets/projects/storeLu.png"
import portfolio from "../../assets/projects/portfolio.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./projects.css"

const imgs = 
[
  {
    src: hardStore,
    desc: "Hardware E-Commerce, developed with HTML, Sass and JavaScript",
    repoLink: "https://github.com/nicojoaquin/hard-store",
    pageLink: "https://hard-store.netlify.app/"
  },
  {
    src: storeLu,
    desc: "Store of pots and plants, developed with HTML, Sass and JavaScript",
    repoLink: "https://github.com/nicojoaquin/Store-Lu",
    pageLink: "https://store-lu.netlify.app/"
  },
  {
    src: portfolio,
    desc: "Personal page, used as portfolio, developed with React",
    repoLink: "https://github.com/nicojoaquin/Portfolio",
    pageLink: "https://nicojoaquin.github.io/Portfolio/"
  }
];

const ProjectsContainer = () => {
  
  const [imgIndex, setImgIndex] = useState(0)
  
  const settings = {
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="d-flex justify-content-center text-center">
      <div className="m-5 p-3 w-75 text-center">
        <h1 className="pb-3">My projects</h1>
        <hr />
        <Slider className="pt-5" {...settings}>
          {
            imgs.map((img,idx) => ( 
              <Sliders key={idx} imgIndex={imgIndex} {...img} idx={idx}/>  
            ))
          }
        </Slider>
        <div className="d-flex justify-content-center">
          <Link to="/contact" className="w-50 go btn rounded-pill d-flex align-items-center justify-content-evenly m-5 pt-3 shadow-sm">
            <h4>Contact me!</h4>
            <FontAwesomeIcon icon={ faArrowCircleRight } size="8x" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContainer
