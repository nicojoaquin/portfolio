import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import AboutContainer from '../components/about/AboutContainer'

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: "-100vw"
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0
  },
  out: {
    opacity: 0,
    scale: 1.2,
    x: "100vw"
  }
}

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
}

const About = () => {
  return (
    <motion.section
    className= "about container-fluid mx-auto"
    variants={variants}
    initial="hidden"
    animate="show"
    exit="out"
    transition={transition}
    >
     <AboutContainer />
    </motion.section>
  )
}

export default About
