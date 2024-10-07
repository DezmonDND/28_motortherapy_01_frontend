import "./PopupWithFriends.css";

function PopupWithFriends(props) {
  const { isOpen, onClose, friends } = props;

  return (
    <div
      className={`popup popup-friends ${isOpen ? "popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup_opened")) {
          onClose();
        }
      }}
    >
      <div className="popup__friends">
        {friends.map((friend) => (
          <a
            href="/"
            target="blank"
            className="popup__friends-link"
            key={friend.id}
          >
            <img
              className="popup__friends-image"
              src={friend.icon}
              alt={friend}
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PopupWithFriends;