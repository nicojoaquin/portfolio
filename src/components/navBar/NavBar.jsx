import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNav = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3 ">
      <div className="container-fluid d-flex flex-column fs-3 ">
        <button
          className="navbar-toggler"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="text-center">
          <ul className={`nav-menu text-center ${toggleMenu && "show-menu"}`}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link rounded-pill w-75 shadow-sm p-3 m-4"
                activeClassName="active"
                onClick={handleNav}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item rounded-pill">
              <NavLink
                to="/about"
                className="nav-link rounded-pill w-auto  shadow-sm p-3 m-4"
                activeClassName="active"
                onClick={handleNav}
              >
                About me
              </NavLink>
            </li>
            <li className="nav-item rounded-pill">
              <NavLink
                to="/projects"
                className="nav-link rounded-pill w-auto shadow-sm p-3 m-4"
                activeClassName="active"
                onClick={handleNav}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
