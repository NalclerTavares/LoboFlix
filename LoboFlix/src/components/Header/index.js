import React from "react";
import Logo from "../../assets/lobo04.png";
import "./index.css";

function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="LoboFlix logo" />
      </a>
    </nav>
  );
}

export default Header;
