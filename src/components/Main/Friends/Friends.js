import Slider from "react-slick";
import "./Friends.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../../assets/images/logo.png";

function Friends() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <section className="friends" id="friends">
      <h2 className="friends__title">Друзья</h2>
      <button className="firends__button">Смотреть все</button>
      <div className="friends__slider">
        <Slider {...settings}>
          <div>
            <img src={Logo} alt="slide-1" />
          </div>
          <div>
            <img src={Logo} alt="slide-2" />
          </div>
          <div>
            <img src={Logo} alt="slide-3" />
          </div>
          <div>
            <img src={Logo} alt="slide-3" />
          </div>
          <div>
            <img src={Logo} alt="slide-3" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Friends;
