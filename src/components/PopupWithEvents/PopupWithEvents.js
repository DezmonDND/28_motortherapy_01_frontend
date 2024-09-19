import "./PopupWithEvents.css";
import closeButton from "../../assets/images/close-button.png";

function PopupWithEvents(props) {
  const { events, isOpen, onClose } = props;

  return (
    <div
      className={`popup popup-events ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div style={{
        position: 'relative',
        overflowY: 'auto'
      }}>
        <button onClick={onClose} className="modal__close-button modal__close-button_events">
          <img
            src={closeButton}
            className="modal__close-button-img"
            alt="закрыть"
          />
        </button>
        <div className="popup__events-container">
          {events.map((event) => (
            <a
              className="popup__events-link"
              href={event.link}
              target="blank"
              style={{
                backgroundImage: `url(${event.icon})`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 className="popup__events-title">{event.title}</h2>
                <p
                  className="popup__events-title"
                  style={{
                    padding: 0,
                  }}
                >
                  {event.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopupWithEvents;
