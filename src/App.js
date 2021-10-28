import React from "react";
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";


import "./App.css"
import "./bubble.css"

function App() {
  return (
    <>
      
      <section className="sticky">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>   
        </div>
      </section>
      
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
  
    </>
  );
}

export default App;
