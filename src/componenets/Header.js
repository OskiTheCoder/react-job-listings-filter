import React from "react";
import backgroundImageDesktop from "../images/bg-header-desktop.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="bg-desktop"
        src={backgroundImageDesktop}
        alt="background"
      />
    </header>
  );
};

export default Header;
