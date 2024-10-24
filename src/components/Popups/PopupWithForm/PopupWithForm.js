import "./PopupWithForm.css";
import { useFormWithValidation } from "../../../hoocks/validation";

function PopupWithForm(props) {
  const { isOpen, onClose, handleAddFeedback } = props;

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    handleAddFeedback(values);
    e.target.reset();
  }

  return (
    <div
      className={`popup popup-contactUs ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="contactUs__container">
        <form
          className="contactUs__form feedback_form"
          onSubmit={handleSubmit}
          noValidate
        >
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
                  minLength={1}
                  maxLength={64}
                  pattern="^(?:[а-яёА-ЯЁ]+)(?:[\-\s]{0,2})?(?:[а-яёА-ЯЁ]+)?$|^(?:[a-zA-Z]+)(?:[\-\s]{0,2})?(?:[a-zA-Z]+)?$"
                  required
                ></input>
                <span className="form__input_name-error form__input-error">
                {errors.name &&
                    "Разрешены латиница или кириллица и не более двух пробелов. Смешивание запрещено."}
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
                  required
                ></input>
                <span className="form__input_email-error form__input-error">
                  {errors.email}
                </span>
              </div>
            </div>
            <div className="form__block">
              <label className="form__input-name ">Текст отзыва:</label>
              <textarea
                onChange={handleChange}
                className="form__comment form__input_comment form__placeholder"
                placeholder="Оставьте свой комментарий..."
                name="comment"
                value={values.comment || ""}
                minLength={1}
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
              Отправить отзыв
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
