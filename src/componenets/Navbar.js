import React, { useState } from "react";
import logo from "../assets/myLogo.svg";
import "../styles/hamburger.scss";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <nav className="Navbar">
        <img className="logo" src={logo} width="64px" alt="logo" />
        <ul className={isActive ? "top-down" : "normal-nav"}>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className="resume-btn">
              <span>Resume</span>
            </button>
          </li>
        </ul>
        {/* Hamburger menu */}
        <button
          className={
            isActive
              ? "hamburger hamburger--spring is-active"
              : "hamburger hamburger--spring "
          }
          onClick={toggleClass}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
