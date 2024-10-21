import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Modal.css";
import closeButton from "../../assets/images/close-button.png";

function Modal({ info, onClose }) {
  const modalRef = useRef();

  // Функция для форматирования текста с сервера
  const formatText = (text) => {
    return text.split("\n").map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "my-dots",
    arrows: false,
  };

  // Добавляем обработчик событий для закрытия модального окна по нажатию Esc и клику вне модального окна
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    // Удаляем обработчики событий при размонтировании компонента
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__content">
        <button onClick={onClose} className="modal__close-button">
          <img
            src={closeButton}
            className="modal__close-button-img"
            alt="закрыть"
          />
        </button>
        <h2 className="modal__title">{info.name}</h2>
        <div className="modal__container">
          <video
            className="modal__video"
            width="645"
            controls
            src={info.link}
          ></video>
          <Slider {...settings} className="modal__slider">
            {info.photo.map((photo) => (
              <div key={photo.link}>
                <img
                  className="modal__slide"
                  src={photo.link}
                  alt={info.name}
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className="modal__description">{formatText(info.text)}</p>
        <button onClick={onClose} className="modal__back-button">
          Назад
        </button>
      </div>
    </div>
  );
}

export default Modal;
