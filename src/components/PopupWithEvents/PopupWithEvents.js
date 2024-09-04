import "./PopupWithEvents.css";

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
            <h2 className="popup__events-title">{event.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PopupWithEvents;
