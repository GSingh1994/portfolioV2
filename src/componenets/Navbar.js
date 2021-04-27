import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import logo from "../assets/myLogo.svg";
import "../styles/hamburger.scss";

const Navbar = function () {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // Hide navbar onClick outside
  Navbar.handleClickOutside = () => setActive(isActive);

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
      setActive(false);
    }
    prevScrollpos = currentScrollPos;
  };

  window.addEventListener("resize", function () {
    setActive(false);
  });

  return (
    <div>
      <nav className="Navbar" id="Navbar">
        <a href="#App">
          <img className="logo" src={logo} width="64px" alt="logo" />
        </a>
        <ul className={isActive ? "top-down" : null}>
          <li>
            <a href="#Projects">Projects</a>
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

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);
