import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Modal.css";
import closeButton from "../../assets/images/close-button.png"
import motoPhoto from "../../assets/images/moto.jpg"
import motoPhoto2 from "../../assets/images/moto2.png"


function Modal({ info, onClose }) {

  const modalRef = useRef();

  // Функция для форматирования текста с сервера
  const formatText = (text) => {
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br /><br />
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
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    // Удаляем обработчики событий при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__content">
        <button onClick={onClose} className="modal__close-button">
          <img src={closeButton} className="modal__close-button-img" alt="закрыть" />
        </button>
        <h2 className="modal__title">{info.name}</h2>
        <div className='modal__container'>
          <iframe className='modal__video'
            width="645"
            height="409"
            src="https://www.youtube.com/embed/OQmXrKPeOVo?si=3ul0ve2vLT7y5hhh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <Slider {...settings} className="modal__slider">
            <img className="modal__slide" src={motoPhoto} alt={info.name} />
            <img className="modal__slide" src={motoPhoto2} alt={info.name} />
            <img className="modal__slide" src={motoPhoto} alt={info.name} />
          </Slider>
        </div>
        <p className="modal__description">
          {formatText(`— Ольга Ивановна, вы нас ждёте? — Мы всегда вас ждём, ключ под ковриком! Разговор с директором центра Дарина в Гатчине по согласованию поездки через год знакомства уже выглядит так. Это очень важно, когда доверие заработано и уже не надо объяснять, кто мы и зачем хотим приехать! Дату обозначили… осталось только ждать!
В прошлом году дети мучали воспитателей вопросами — а когда приедут, а завтра уже скоро? В этом году всё капельку изменилось — мы, взрослые ждали встречу с малышами и не обращали на прогноз погоды.
И снова точка сбора, постояшки и новенькие, инструктаж и в путь! Нас не пугали тучи и огромная пробка, которую к удивлению быстро проскочили. Водители машин видимо чувствовали, что едем дарить эмоции!
Приехали и сразу были окружены детьми. Было много новых, но были и те, которые уже стали родными и ждали этой встречи с нетерпеньем. Дождик всё-таки нас настиг, спрятали железных коней под деревьями, а вот детей спрятать под крышей не получилось. Они сразу же оседлали мотоциклы и разогнали тучи ревом мотоциклов. Даже мысли о покатушках остались где-то далеко.
Горящие глаза, руки на руле, можно открутить ручку газа и почувствовать себя настоящим мотоциклистом. А самое главное — это внимание взрослых, которые терпеливо отвечали на все вопросы, были просто рядом, чего им так не хватает.
И вот, наступил черёд покатушек! «Старенькие» уже знают правила — не толпиться, не залезать без отмашки на мотоцикл и обязательно надеть шлем! И только накрапывающий дождь, смог остановить это безудержное веселье!
А во время покатушек под крышей беседки случилось волшебство и появилась скатерть -самобранка с горячими вкуснейшими хот-догами, конфетами, арбузом, соками и чаем (почти из самовара)!
Подкрепились и появились сил для игр и общения. Кто-то залез на руки, кто-то играл в мячик, пускал мыльные пузыри или просто держал взрослого за руки, которые делились своим душевным теплом. В этот раз, как никогда, часто звучал вопрос: -А вы когда ещё придете?
В заключении этого замечательного дня добавили ярких красок!
Ну и конечно - общее фото и крепкие обнимашки!
Спасибо всем волшебникам и феям, которые так или иначе приняли участие в это Дне Добрых дел! Без вас не было бы этих счастливых улыбок!
Отдельное спасибо мотоклубам «Русские медведи» и «Крутящий момент СпБ» за организованный сбор одежды!
За полные животики от вкуснейших пицц огромное спасибо нашим друзьям - «BERR HOUSE»!`)}
        </p>
        <button onClick={onClose} className="modal__back-button">
              Назад
            </button>
      </div>
    </div>
  );
}

export default Modal;
