import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { EVENTS } from "../../mocks/user-data";

function Events() {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dotsClass: "my-dots",
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOpenModal = (eventInfo) => {
    setModalInfo(eventInfo);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <section className="events" id="events">
      <h2 className="events__title">Мероприятия</h2>
      <button className="events__button">Смотреть все</button>
      <div className="events__content">
        <Slider {...settings}>
          {EVENTS.map((event) => (
            <div
              className="events__block"
              key={event.id}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={event.icon} alt="slide-1" className="events__icon" />
              <p className="events__date">{event.date}</p>
              <p className="events__name">{event.title}</p>
              <button
                value={event}
                onClick={() =>
                  handleOpenModal({
                    date: event.date,
                    name: event.title,
                    icon: event.icon,
                    text: event.text,
                    link: event.link,
                    photo: event.photo,
                  })
                }
                className="events__link"
              >
                Смотреть
              </button>
            </div>
          ))}
        </Slider>
      </div>
      {modal && <Modal info={modalInfo} onClose={handleCloseModal} />}
    </section>
  );
}

export default Events;
