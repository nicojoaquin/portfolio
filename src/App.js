import React from "react";
import Bubble from "./components/bubble/Bubble"
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence  } from 'framer-motion/dist/framer-motion'


import "./App.css"

function App() {

  const location = useLocation()

  return (
    <>
        <Bubble />   
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route  path="/" exact>
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/projects">
              <Projects />
            </Route>
            <Route  path="/contact">
              <Contact />
            </Route>
          </Switch>
        </AnimatePresence>

    </> 
  );
}

export default App;