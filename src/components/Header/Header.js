import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import BurgerButton from "../../assets/images/burger_logo.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const [isMenuOpen, serIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    serIsMenuOpen(true);
  };

  const handleClose = () => {
    serIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header__logo">MotoEmotions</div>
        <button className="header__burger-btn" type="button">
          <img
            className="header__btn-image"
            src={BurgerButton}
            alt="Burger icon"
            onClick={toggleMenu}
          ></img>
        </button>
        <Navigation />
        <BurgerMenu isOpen={isMenuOpen} onClose={handleClose}></BurgerMenu>
      </div>
    </header>
  );
}

export default Header;
