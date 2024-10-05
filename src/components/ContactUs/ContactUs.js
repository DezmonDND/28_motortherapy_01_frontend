/*eslint-disable*/
import "./ContactUs.css";
import { useFormWithValidation } from "../../hoocks/validation";
import {
  REGEX_EMAIL,
  REGEX_NAME_EN,
  REGEX_NAME_RU,
  REGEX_PHONE,
} from "../../mocks/constatnts";
import { api } from "../../utils/api";
import { useState } from "react";

function ContactUs() {
  const { values, errors, isValid, handleChange, closePopup } =
    useFormWithValidation();
  const [isNameValid, setIsNameValid] = useState(false);

  function handleAddContact(values) {
    api
      .contactUs(values)
      .then(() => {
        values = {};
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleAddContact(values);
    e.target.reset();
  }

  return (
    <section className="contactUs" id="contactUs">
      <div className="contactUs__container">
        <h2 className="contactUs__title">Связаться с нами</h2>
        <form
          className="contactUs__form"
          onSubmit={handleSubmit}
          noValidate
          id="contactForm"
        >
          <div className="form__content">
            <div className="form__data">
              <div className="form__block">
                <label className="form__input-name">Ваше имя:</label>
                <input
                  onChange={handleChange}
                  className="form__input form__input_name"
                  placeholder="Введите имя"
                  name="name"
                  value={values.name || ""}
                  minLength={1}
                  maxLength={64}
                  pattern="^(?:[а-яёА-ЯЁ]+)(?:[\-\s]{0,2})?(?:[а-яёА-ЯЁ]+)?$|^(?:[a-zA-Z]+)(?:[\-\s]{0,2})?(?:[a-zA-Z]+)?$"
                  required
                ></input>
                <span className="form__input_name-error form__input-error">
                  {errors.name}
                </span>
              </div>
              <div className="form__block">
                <label className="form__input-name">Телефон:</label>
                <input
                  onChange={handleChange}
                  className="form__input form__input_phone"
                  placeholder="7-900-000-0000"
                  value={values.phone || ""}
                  name="phone"
                  pattern="^\+?(7|8)?\d{10}$"
                  required
                ></input>
                <span className="form__input_phone-error form__input-error">
                  {errors.phone}
                </span>
              </div>
              <div className="form__block">
                <label className="form__input-name">Электронная почта:</label>
                <input
                  onChange={handleChange}
                  className="form__input form__input_email"
                  placeholder="email@email.ru"
                  name="email"
                  type="email"
                  minLength={5}
                  maxLength={50}
                  value={values.email || ""}
                  // pattern={REGEX_EMAIL}
                  pattern="^(?:[а-яёА-ЯЁ]+)(?:[\-\.]{0,2})?(?:[а-яёА-ЯЁ]+)?$"
                  required
                ></input>
                <span className="form__input_email-error form__input-error">
                  {errors.email}
                </span>
              </div>
            </div>
            <div className="form__block">
              <label className="form__input-name">Комментарий:</label>
              <textarea
                onChange={handleChange}
                className="form__comment form__input_comment form__placeholder"
                placeholder="Оставьте свой комментарий..."
                name="comment"
                minLength={2}
                maxLength={1000}
                required
              ></textarea>
              <span className="form__input_comment-error">
                {errors.comment}
              </span>
            </div>
            <button
              className="form__button"
              type="submit"
              disabled={!isValid && !isNameValid}
              style={{
                backgroundColor: !isValid ? "#C2C2C2" : "",
              }}
            >
              Связаться с нами
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
