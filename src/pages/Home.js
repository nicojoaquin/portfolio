import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import Presentation from '../components/home/Presentation'

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
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

const Home = () => {
  return (
    <motion.section 
      className="home container-fluid mt-5"
      variants={variants}
      initial="hidden"
      animate="show"
      exit="out"
      transition={transition}
      >
      <Presentation /> 
    </motion.section>
  )
}

export default Home
