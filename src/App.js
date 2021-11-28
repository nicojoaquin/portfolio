import React from "react";
import Bubble from "./components/bubble/Bubble"
import NavBar from './components/navBar/NavBar'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </AnimatePresence>

    </> 
  );
}

export default App;
