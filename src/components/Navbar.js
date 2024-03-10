import React from "react";
import logo from "../images/world_icon.png";

export default function Navbar() {
  const PageTitle = "MY TRAVEL JOURNAL";
  return (
    <nav className="navbar">
      <img src={logo} alt="world-logo" className="world-logo" />
      <h1
        className="page-title"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        {PageTitle}
      </h1>
      <img src={logo} alt="world-logo" className="world-logo" />
    </nav>
  );
}
