import React, {useState} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hardStore from "../../assets/projects/hardStore.png"
import storeLu from "../../assets/projects/storeLu.png"
import portfolio from "../../assets/projects/portfolio.png"

import "./projects.css"

const imgs = [hardStore, storeLu, portfolio];


const Sliders = () => {

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
              <div className={`card bg-dark slide ${idx === imgIndex && "activeSlide"}`}>
                <img className="card-img-top slider-img" src={img} alt={img} />
                <div className="card-body">
                  <p className="text-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro!
                  </p> 
                </div>
              </div>  
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Sliders
