import { HashLink } from "react-router-hash-link";
import "./BurgerMenu.css";
import VkIcon from "../../assets/images/vk_icon_burger.png";
import WhatsUpIcon from "../../assets/images/wp_icon_burger.png";
import CloseButton from "../../assets/images/close-button.png";
import TgIcon from "../../assets/images/tg_icon_white.svg";

function BurgerMenu(props) {
  const { isOpen, onClose } = props;

  return (
    <div className={`burger ${isOpen ? "burger_open" : ""}`}>
      <button className="burger__close-btn" onClick={onClose}>
        <img
          className="burger__close-image"
          src={CloseButton}
          alt="Close button"
        ></img>
      </button>
      <ul className="burger__list">
        <HashLink className="burger__link" to="#aboutUs">
          О нас
        </HashLink>
        <HashLink className="burger__link" to="#events">
          Мероприятия
        </HashLink>
        <HashLink className="burger__link" to="#contactUs">
          Контакты
        </HashLink>
        <HashLink className="burger__link" to="#helpUs">
          Как помочь
        </HashLink>
        <HashLink className="burger__link" to="#friends">
          Друзья
        </HashLink>
        <div className="burger__socials">
          <a
            href="https://vk.com/mototerapiya"
            className="burger__social-link"
            target="newBlank"
          >
            <img
              classList="burger__social-icon"
              src={VkIcon}
              alt="Icon"
              style={{
                width: 33,
              }}
            ></img>
          </a>
          <a href="/" className="burger__social-link" target="newBlank">
            <img
              classList="burger__social-icon"
              src={WhatsUpIcon}
              alt="Icon"
              style={{
                width: 33,
              }}
            ></img>
          </a>
          <a href="/" className="burger__social-link" target="newBlank">
            <img
              classList="burger__social-icon"
              src={TgIcon}
              alt="Icon"
              style={{
                width: 33,
              }}
            ></img>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default BurgerMenu;
