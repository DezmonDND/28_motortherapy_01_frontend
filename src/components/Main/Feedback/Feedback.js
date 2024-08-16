/* eslint-disable */
import { useState } from "react";
import { FEEDBACKS } from "../../../mocks/user-data";
import "./Feedback.css";

function Feedback(props) {
  const [feedbacks, setFeedbacks] = useState(FEEDBACKS);

  const { onOpenPopup } = props;

  function handleFeedbackClick() {
    onOpenPopup();
  }

  return (
    <section className="feedback">
      <h2 className="feedback__title">Отзывы о нас</h2>
      <div className="feedback__container">
        {feedbacks.length !== 0 &&
          feedbacks.map((feedback) => (
            <div className="feedback__block">
              <h2 className="feedback__name">{feedback.name}</h2>
              <p className="feedback__email">{feedback.email}</p>
              <p className="feedback__text">{feedback.text}</p>
            </div>
          ))}
      </div>
      <button
        type="button"
        className="feedback__button"
        onClick={handleFeedbackClick}
      >
        Оставить отзыв
      </button>
    </section>
  );
}

export default Feedback;
