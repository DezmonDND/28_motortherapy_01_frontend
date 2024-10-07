import "./SuccessPopup.css";
import icon_ok from "../../../assets/images/ok_icon.svg";
import icon_fail from "../../../assets/images/fail_icon.svg";

function SuccessPopup(props) {
  const { onClose, isSuccess, isOpen } = props;
  const icon = isSuccess ? icon_ok : icon_fail;
  const message = isSuccess
    ? "Данные успешно отправлены!"
    : "Произошла ошибка, попробуйте еще раз!";

  return (
    <div
      className={`popup popup-success ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="success__content">
        <button className="success__button" onClick={onClose}></button>
        <div className="success_info">
          <img className="success__iamge" src={icon} alt=""></img>
          <p className="success__text">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
