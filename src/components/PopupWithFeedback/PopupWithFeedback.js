import "./PopupWithFeedback.css";

function PopupWithFeedback(props) {
  const { isOpen, onClose, selectedFeedback } = props;

  return (
    <div
      className={`popup popup-feedback ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="popup__feedback">{selectedFeedback.text}</div>
    </div>
  );
}

export default PopupWithFeedback;
