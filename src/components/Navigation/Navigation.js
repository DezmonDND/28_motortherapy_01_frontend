import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">О нас</li>
        <li className="navigation__item">Мероприятия</li>
        <li className="navigation__item">Контакты</li>
        <li className="navigation__item">Как помочь</li>
        <li className="navigation__item">Друзья</li>
      </ul>
    </header>
  );
}

export default Navigation;
