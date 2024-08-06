import { Link } from "react-router-dom";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import IconVk from "../../../assets/images/vk_icon.svg";
import IconTg from "../../../assets/images/tg_icon.svg";
import IconWp from "../../../assets/images/wp_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">MotoEmotions</h2>
        <div className="footer__content">
          <div className="footer__navigation">
            <h3 className="footer__links-title">Навигация</h3>
            <ul className="footer__links">
              <HashLink to="#aboutUs" className="footer__link">
                О нас
              </HashLink>
              <HashLink to="#aboutUs" className="footer__link">
                Мероприятия
              </HashLink>
              <HashLink to="#contactUs" className="footer__link">
                Связаться с нами
              </HashLink>
              <HashLink to="#helpUs" className="footer__link">
                Как помочь
              </HashLink>
              <HashLink to="#friends" className="footer__link">
                Друзья
              </HashLink>
            </ul>
          </div>
          <div className="footer__contacts">
            <h3 className="footer__links-title">Контакты </h3>
            <div className="footer__contacts">
              <p className="footer__contact">+7 999 888-77-66</p>
              <p className="footer__contact">motoemotions@mail.ru</p>
              <div className="footer__socials">
                <Link to="/">
                  <img className="footer__icon" src={IconVk} alt="VK"></img>
                </Link>
                <Link to="/">
                  <img
                    className="footer__icon"
                    src={IconTg}
                    alt="Telegram"
                  ></img>
                </Link>
                <Link to="/">
                  <img
                    className="footer__icon"
                    src={IconWp}
                    alt="Whatsapp"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__develop">
            <h3 className="footer__links-title">Разработка сайта</h3>
            <p className="footer__text">Политика конфиденциальности</p>
            <p className="footer__text">Все права защищены © 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
