import React from "react";
import airbnbLogo from "../images/airbnb.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={airbnbLogo} alt="Airbnb" />
    </nav>
  );
}

export default Navbar;
