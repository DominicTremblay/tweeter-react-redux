import React from "react";
import "./NavBar.css";
const NavBar = props => {
  return (
    <nav id="nav-bar">
      <img className="logo" src="/images/bird.png" alt="logo" />
      <span className="header">Tweeter</span>
    </nav>
  );
};

export default NavBar;
