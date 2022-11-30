import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

interface Navbar {}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="row container-fluid mt-3 d-flex justify-content-between">
        <div className="navbar-brand col-1 ms-5 ps-5">
          <p className="logo bg-primary text-white">NQ</p>
        </div>

        <div className="links ms-5 collapse navbar-collapse" id="navbarText">
          <ul
            className={`nav-left col-7 navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around`}
          >
            <li className="nav-item">
              {/* <a className="nav-link " aria-current="page" href="#">
                Home
              </a> */}
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Experience" className="nav-link">Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/Resume" className="resume nav-link text-white bg-primary px-4">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
