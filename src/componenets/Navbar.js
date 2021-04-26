import React, { useState } from "react";
import logo from "../assets/myLogo.svg";
import "../styles/hamburger.scss";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // Fix nav back on reverse scroll
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    const navbarStyle = document.getElementById("Navbar").style;

    if (currentScrollPos < 50) {
      navbarStyle.backgroundColor = "#252839"; //$secondary-clr
    } else if (prevScrollpos > currentScrollPos) {
      navbarStyle.top = "0";
      navbarStyle.backgroundColor = "rgba(27, 29, 42, 0.7)"; //$dark-secondary
    } else {
      navbarStyle.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      <nav className="Navbar" id="Navbar">
        <img className="logo" src={logo} width="64px" alt="logo" />
        <ul className={isActive ? "top-down" : "normal-nav"}>
          <li>
            <a href="#Projects">Projects</a>{" "}
          </li>
          <li>
            <a href="#Terminal">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
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
