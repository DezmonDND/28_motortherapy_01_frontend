import React from "react";

import "./Promo.css";

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
          <button className="promo-buttons__button promo-buttons__button_color">
            Принять участие
          </button>
          <button className="promo-buttons__button">Помочь</button>
        </div>
      </div>
    </div>
  );
}

export default Promo;
