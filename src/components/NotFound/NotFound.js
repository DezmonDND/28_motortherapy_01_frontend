/* eslint-disable */
import "./NotFound.css";
import NotFoundBigIcon from "../../assets/images/404_big.webp";
import NotFoundSmallIcon from "../../assets/images/404_small.webp";
import NotFoundMiddleIcon from "../../assets/images/404_middle.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BIG_WIDTH_SIZE,
  MIDDLE_WIDTH_SIZE,
  MOBILE_WIDTH_SIZE,
} from "../../mocks/constatnts";
import debounce from "debounce";

function NotFound() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [image, setImage] = useState(NotFoundBigIcon);

  useEffect(() => {
    const screenSize = debounce(() => setWindowWidth(window.innerWidth), 10);

    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  function notFoundImage() {
    if (windowWidth >= BIG_WIDTH_SIZE) {
      setImage(NotFoundBigIcon);
    } else if (windowWidth >= MIDDLE_WIDTH_SIZE) {
      setImage(NotFoundMiddleIcon);
    } else if (windowWidth <= MOBILE_WIDTH_SIZE) {
      setImage(NotFoundSmallIcon);
    }
  }

  useEffect(() => {
    notFoundImage();
  }, [windowWidth]);

  return (
    <section className="notFound">
      <div className="notFound__content">
        <p className="notFound__title">
          УПС... КАЖЕТСЯ ЧТО-ТО ПОШЛО НЕ ТАК
          <img className="notFound__image" src={image} alt="Мотоцикл"></img>
        </p>
      </div>
      <Link to="/" className="notFound__button">
        На главную
      </Link>
    </section>
  );
}

export default NotFound;
