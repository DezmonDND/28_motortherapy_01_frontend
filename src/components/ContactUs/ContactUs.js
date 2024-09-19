import "./ContactUs.css";
import { useFormWithValidation } from "../../hoocks/validation";
import { REGEX_EMAIL, REGEX_NAME, REGEX_PHONE } from "../../mocks/constatnts";

function ContactUs() {
  const { values, errors, isValid, handleChange } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contactUs" id="contactUs">
      <div className="contactUs__container">
        <h2 className="contactUs__title">Связаться с нами</h2>
        <form className="contactUs__form" onSubmit={handleSubmit} noValidate>
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
                  pattern={REGEX_NAME}
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
                  type="phone"
                  pattern={REGEX_PHONE}
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
                  minLength={5}
                  maxLength={50}
                  value={values.email || ""}
                  pattern={REGEX_EMAIL}
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
              disabled={!isValid}
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
