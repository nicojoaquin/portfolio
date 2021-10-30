import React from 'react'

import "./projects.css"

const Sliders = ({imgIndex, img, idx}) => {

  return (   
      
    <div className={`w-100 card bg-dark slide ${idx === imgIndex && "activeSlide"}`}>
      <img className="card-img-top slider-img" src={img} alt={img} />
      <div className="card-body">
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro!
        </p> 
      </div>
    </div>  

  )

}

export default Sliders
