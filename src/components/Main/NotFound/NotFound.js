import "./NotFound.css";
import NotFoundBigIcon from "../../../assets/images/404_big.webp";
import NotFoundSmallIcon from "../../../assets/images/404_small.webp";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notFound">
      <div className="notFound__content">
        <p className="notFound__title">
          УПС... КАЖЕТСЯ ЧТО-ТО ПОШЛО НЕ ТАК
          <img
            className="notFound__image"
            src={NotFoundBigIcon}
            alt="Мотоцикл"
          ></img>
        </p>
      </div>
      <Link to="/" className="notFound__button">
        На главную
      </Link>
    </section>
  );
}

export default NotFound;
