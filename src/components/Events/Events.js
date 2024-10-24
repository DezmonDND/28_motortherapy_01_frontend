import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Events(props) {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const { events, onOpenEventsPopup } = props;

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

  function convertDate(data) {
    const date = new Date(data);
    return date.toLocaleDateString();
  }

  return (
    <section className="events" id="events">
      <h2 className="events__title">Мероприятия</h2>
      <button className="events__button" onClick={onOpenEventsPopup}>
        Смотреть все
      </button>
      <div className="events__content">
        <Slider {...settings}>
          {events.map((event) => (
            <div
              className="events__block"
              key={event.pk}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={event.preview} alt="slide-1" className="events__icon" />
              <p className="events__date">{convertDate(event.date)}</p>
              <p className="events__name">{event.title}</p>
              <button
                value={event}
                onClick={() =>
                  handleOpenModal({
                    date: convertDate(event.date),
                    name: event.title,
                    icon: event.preview,
                    text: event.description,
                    link: event.link,
                    photo: event.photos,
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
