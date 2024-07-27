import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__logo">MotoEmotions</div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
