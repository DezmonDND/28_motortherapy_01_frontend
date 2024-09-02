import "./HelpUs.css";
import MotoIcon from "../../assets/images/motorcycle_icon.svg";
import TruckIcon from "../../assets/images/truck_icon.svg";
import MoneyIcon from "../../assets/images/money_icon.svg";

function HelpUs() {
  return (
    <section className="helpUs" id="helpUs">
      <h2 className="helpUs__title">Помочь нам</h2>
      <ul className="helpUs__content">
        <li className="helpUs__info">
          <img src={MotoIcon} alt="Мотоцикл" className="helpUs__image"></img>
          <h3 className="helpUs__name">Присоединиться к поездке</h3>
          <p className="helpUs__text">
            Присоединиться можно очень просто, написать нам или приехать
            на точку сбора! Вся актуальная информация о предстоящих мероприятиях
            у нас на страничке вконтакте
          </p>
        </li>
        <li className="helpUs__info">
          <img src={TruckIcon} alt="Truck icon" className="helpUs__image"></img>
          <h3 className="helpUs__name">Передать вещи</h3>
          <p className="helpUs__text">
            Вы можете самостоятельно приобрести (мы заберём), заказать в Ozon
            или Wildberris по адресу: <br /> Санкт-Петербург, Авиаконструкторов
            пр. 2, ул. Ильюшина, 123 685
          </p>
        </li>
        <li className="helpUs__info">
          <img src={MoneyIcon} alt="Money icon" className="helpUs__image"></img>
          <h3 className="helpUs__name">Перечислить деньги</h3>
          <p className="helpUs__text">
            Перевести посильную сумму по НОМЕРУ телефона:
            <br />
            +7 911 285-44-57 РАЙФФАЙЗЕНБАНК С пометкой «Детям»
          </p>
        </li>
      </ul>
    </section>
  );
}

export default HelpUs;
