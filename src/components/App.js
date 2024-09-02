/* eslint-disable */
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import { useState } from "react";
import PopupWithFeedback from "./PopupWithFeedback/PopupWithFeedback";
import { FEEDBACKS } from "../mocks/user-data";

function App() {
  const [feedbacks, setFeedbacks] = useState(FEEDBACKS);
  const [selectedFeedback, setSelectedFeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);

  function handleOpenFeedbackPopup() {
    setIsOpen(true);
  }

  function handleOpenAddFeedbackPopup(feedback) {
    setIsFeedbackPopupOpen(true);
    setSelectedFeedback(feedback);
  }

  function closePopup() {
    setIsOpen(false);
    setIsFeedbackPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              feedbacks={feedbacks}
              onOpenAddFeedbackPopup={handleOpenFeedbackPopup}
              onOpenFeedbackPopup={handleOpenAddFeedbackPopup}
              onClose={closePopup}
            ></Main>
          }
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <PopupWithForm isOpen={isOpen} onClose={closePopup}></PopupWithForm>
      <PopupWithFeedback
        selectedFeedback={selectedFeedback}
        isOpen={isFeedbackPopupOpen}
        onClose={closePopup}
      ></PopupWithFeedback>
    </>
  );
}

export default App;
