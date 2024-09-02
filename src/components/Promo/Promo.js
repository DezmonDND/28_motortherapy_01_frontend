import React from "react";
import "./Promo.css";
import { HashLink } from "react-router-hash-link";

function Promo() {
  return (
    <div className="promo">
      <div className="promo-background"></div>
      <div className="promo-container">
        <div className="promo-info">
          <h1 className="promo-info__title">
            М
            <span className="promo-info-info__title promo-info__title_color">
              О
            </span>
            Т
            <span className="promo-info__title promo-info__title_color">О</span>
            ТЕРАПИЯ
          </h1>
          <h3 className="promo-info__subtitle">
            Реабилитация с яркими эмоциями
          </h3>
        </div>
        <div className="promo-buttons">
          <HashLink
            className="promo-buttons__button promo-buttons__button_color"
            to="#contactUs"
          >
            Принять участие
          </HashLink>
          <HashLink className="promo-buttons__button" to="#helpUs">
            Помочь
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Promo;
