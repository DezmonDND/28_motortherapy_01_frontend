import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import {
  BIG_WIDTH_SIZE_COLUMNS,
  BIG_WIDTH_SIZE_FEEDBACKS,
  MIDDLE_WIDTH_SIZE_COLUMNS,
  MIDDLE_WIDTH_SIZE_FEEDBACKS,
  MOBILE_WIDTH_SIZE_FEEDBACKS,
} from "../../mocks/constatnts";
import debounce from "debounce";
import "./Feebacks.css";

function Feedbacks(props) {
  const { feedbacks, onOpenAddFeedbackPopup, onOpenFeedbackPopup, onClose } =
    props;
  const [showFeedbacks, setShowFeedbacks] = useState(6);
  const [windowWidth, setWindowsWidth] = useState(window.innerWidth);
  const feedbacksList = feedbacks.slice(0, showFeedbacks);

  function handleFeedbackClick() {
    onOpenAddFeedbackPopup();
  }

  function showFeedbacksButton() {
    if (windowWidth >= BIG_WIDTH_SIZE_COLUMNS) {
      setShowFeedbacks(showFeedbacks + BIG_WIDTH_SIZE_FEEDBACKS);
    } else if (windowWidth >= MIDDLE_WIDTH_SIZE_COLUMNS) {
      setShowFeedbacks(showFeedbacks + MIDDLE_WIDTH_SIZE_FEEDBACKS);
    } else {
      setShowFeedbacks(showFeedbacks + MOBILE_WIDTH_SIZE_FEEDBACKS);
    }
  }

  useEffect(() => {
    const screenSize = debounce(() => setWindowsWidth(window.innerWidth), 10);
    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return (
    <section className="feedback">
      <h2 className="feedback__title">Отзывы о нас</h2>
      <div className="feedback__container">
        {feedbacks.length !== 0 &&
          feedbacksList.map((feedback) => (
            <div key={feedback.author_name}>
              <Feedback
                feedback={feedback}
                onOpenAddFeedbackPopup={onOpenAddFeedbackPopup}
                onOpenFeedbackPopup={onOpenFeedbackPopup}
                onClose={onClose}
              />
            </div>
          ))}
      </div>
      <div className="feedback__buttons">
        {feedbacks.length > 6 && (
          <button
            type="button"
            className="feedback__button feedback__button_more"
            onClick={showFeedbacksButton}
          >
            Показать еще
          </button>
        )}
        <button
          type="button"
          className="feedback__button"
          onClick={handleFeedbackClick}
        >
          Оставить отзыв
        </button>
      </div>
    </section>
  );
}

export default Feedbacks;
