import "./PopupWithForm.css";
import { useFormWithValidation } from "../../hoocks/validation";
import { REGEX_EMAIL, REGEX_NAME } from "../../mocks/constatnts";

function PopupWithForm(props) {
  const { isOpen, onClose } = props;

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="contactUs__container">
        <form className="contactUs__form feedback_form" onSubmit={handleSubmit} noValidate>
          <div className="form__content">
            <div className="form__data">
              <div className="form__block feedback_block">
                <label className="form__input-name">Ваше имя:</label>
                <input
                  onChange={handleChange}
                  className="form__input form__input_name"
                  placeholder="Введите имя"
                  name="name"
                  value={values.name || ""}
                  minLength={2}
                  maxLength={30}
                  pattern={REGEX_NAME}
                  required
                ></input>
                <span className="form__input_name-error form__input-error">
                  {errors.name}
                </span>
              </div>
              <div className="form__block">
                <label className="form__input-name">Электронная почта:</label>
                <input
                  onChange={handleChange}
                  className="form__input form__input_email"
                  placeholder="email@email.ru"
                  name="email"
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
              <label className="form__input-name">Текст отзыва:</label>
              <textarea
                onChange={handleChange}
                className="form__comment form__input_comment"
                placeholder="Оставьте свой комментарий..."
                name="comment"
                minLength={5}
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
              Отправить отзыв
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
