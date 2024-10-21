import Slider from "react-slick";
import "./Friends.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Friends(props) {
  const { friends, onOpenFriendsPopup } = props;

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
          infinite: true,
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
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="friends" id="friends">
      <h2 className="friends__title">Друзья</h2>
      <button className="firends__button" onClick={onOpenFriendsPopup}>
        Смотреть все
      </button>
      <div className="friends__slider">
        <Slider {...settings}>
          {friends.map((friend) => (
            <div key={friend.id}>
              <a href="/" className="popup__friends-link" target="blank">
                <img
                  className="friends__image"
                  src={friend.icon}
                  alt={friend.description}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Friends;
