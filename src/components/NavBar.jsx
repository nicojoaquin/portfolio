import React from 'react'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css"

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3 ">

      <div className="container-fluid d-flex flex-column fs-3 ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={ faBars } />
        </button>

        <div className="collapse navbar-collapse p-3" id="navbarNav">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to = "/" className="nav-link rounded-pill p-3 shadow-sm p-3 mb-5" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item rounded-pill">
              <NavLink to = "/about" className="nav-link rounded-pill p-3 shadow-sm p-3 mb-5" activeClassName="active">About me</NavLink>
            </li>
            <li className="nav-item rounded-pill">
              <NavLink to = "/projects" className="nav-link rounded-pill p-3 shadow-sm p-3 mb-5" activeClassName="active">Projects</NavLink>
            </li>
            <li className="nav-item rounded-pill">
              <NavLink to = "/contact" className="nav-link rounded-pill p-3 shadow-sm p-3 mb-5" activeClassName="active">Contact</NavLink>
            </li>
          </ul>

        </div>

      </div>

    </nav>


  )
}

export default NavBar;
