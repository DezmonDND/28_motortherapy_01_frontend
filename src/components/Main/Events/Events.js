import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventIcon1 from "../../../assets/images/events_icon1.png";
import EventIcon2 from "../../../assets/images/events_icon2.png";
import EventIcon3 from "../../../assets/images/events_icon3.png";
import EventIcon4 from "../../../assets/images/events_icon4.png";
import { Link } from "react-router-dom";

function Events() {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="events">
      <h2 className="events__title">Мероприятия</h2>
      <button className="events__button">Смотреть все</button>
      <div className="events__content">
        <Slider {...settings}>
          <div className="events__block">
            <img src={EventIcon1} alt="slide-1" className="events__icon" />
            <p className="events__date">17 сентября 2022</p>
            <p className="events__name">День добрых дел в Гатчине</p>
            <Link to="" className="events__link">
              Смотреть
            </Link>
          </div>
          <div className="events__block">
            <img src={EventIcon2} alt="slide-1" className="events__icon" />
            <p className="events__date">30 июля 2022</p>
            <p className="events__name">МотоЭмоции в Всеволожске</p>
            <Link to="" className="events__link">
              Смотреть
            </Link>
          </div>{" "}
          <div className="events__block">
            <img src={EventIcon3} alt="slide-1" className="events__icon" />
            <p className="events__date">25 июня 2022</p>
            <p className="events__name">Хоспис Токсово</p>
            <Link to="" className="events__link">
              Смотреть
            </Link>
          </div>{" "}
          <div className="events__block">
            <img src={EventIcon4} alt="slide-1" className="events__icon" />
            <p className="events__date">17 сентября 2022</p>
            <p className="events__name">День добрых дел в Гатчине</p>
            <Link to="" className="events__link">
              Смотреть
            </Link>
          </div>{" "}
          <div className="events__block">
            <img src={EventIcon1} alt="slide-1" className="events__icon" />
            <p className="events__date">17 сентября 2022</p>
            <p className="events__name">День добрых дел в Гатчине</p>
            <Link to="" className="events__link">
              Смотреть
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Events;
