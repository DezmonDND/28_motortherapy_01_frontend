import React from "react";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <header className="navigation">
      <ul className="navigation__list">
        <HashLink to="#aboutUs" className="navigation__item">
          О нас
        </HashLink>
        <HashLink to="#events" className="navigation__item">
          Мероприятия
        </HashLink>
        <HashLink to="#contactUs" className="navigation__item">
          Контакты
        </HashLink>
        <HashLink to="#helpUs" className="navigation__item">
          Как помочь
        </HashLink>
        <HashLink to="#friends" className="navigation__item">
          Друзья
        </HashLink>
      </ul>
    </header>
  );
}

export default Navigation;
