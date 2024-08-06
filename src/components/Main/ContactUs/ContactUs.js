import "./ContactUs.css";

function ContactUs() {
  return (
    <section className="contactUs" id="contactUs">
      <div className="contactUs__container">
        <h2 className="contactUs__title">Связаться с нами</h2>
        <form className="contactUs__form">
          <div className="form__content">
            <div className="form__data">
              <div className="form__block">
                <label className="form__input-name">Ваше имя:</label>
                <input
                  className="form__input form__input_name"
                  placeholder="Введите имя"
                ></input>
              </div>
              <div className="form__block">
                <label className="form__input-name">Телефон:</label>
                <input
                  className="form__input form__input_phone"
                  placeholder="Введите телефон"
                ></input>
              </div>
              <div className="form__block">
                <label className="form__input-name">Электронная почта:</label>
                <textarea
                  className="form__input form__input_e-mail"
                  placeholder="Введите электронную почту"
                ></textarea>
              </div>
            </div>
            <div className="form__block">
              <label className="form__input-name">Комментарий:</label>
              <textarea
                className="form__comment form__input_comment"
                placeholder="Оставьте свой комментарий..."
              ></textarea>
            </div>
          </div>
          <button className="form__button" type="submit">
          Связаться с нами
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
