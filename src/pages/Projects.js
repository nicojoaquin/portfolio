import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import ProjectsContainer from '../components/projects/ProjectsContainer'

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


const Projects = () => {

  return (
    <motion.section
      className= "projects container"
      variants={variants}
      initial="hidden"
      animate="show"
      exit="out"
      transition={transition}
      >
      <ProjectsContainer />
    </motion.section>
  )
}

export default Projects
