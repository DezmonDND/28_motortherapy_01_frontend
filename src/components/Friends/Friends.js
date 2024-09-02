import Slider from "react-slick";
import "./Friends.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FRIENDS } from "../../mocks/user-data";

function Friends() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    dotsClass: "my-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="friends" id="friends">
      <h2 className="friends__title">Друзья</h2>
      <button className="firends__button">Смотреть все</button>
      <div className="friends__slider">
        <Slider {...settings}>
          {FRIENDS.map((friend) => (
            <div key={friend.id}>
              <img
                className="friends__image"
                src={friend.icon}
                alt={friend.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Friends;
