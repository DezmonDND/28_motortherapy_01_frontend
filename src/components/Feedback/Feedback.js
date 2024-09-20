import "./Feedback.css";

function Feedback(props) {
  const { onOpenFeedbackPopup, feedback } = props;

  function handleOpenFeedback() {
    onOpenFeedbackPopup(feedback);
  }

  return (
    <div className="feedback__block">
      <h2 className="feedback__name">{feedback.author_name}</h2>
      <p className="feedback__email">{feedback.email}</p>
      {feedback.text.length < 100 ? (
        <p className="feedback__text">{feedback.text}</p>
      ) : (
        <p
          className="feedback__text feedback__text_long"
          onClick={handleOpenFeedback}
        >
          {`${feedback.text.slice(0, 99)} ...`}
        </p>
      )}
    </div>
  );
}

export default Feedback;
