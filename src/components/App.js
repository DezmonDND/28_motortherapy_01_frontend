/* eslint-disable */
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import { useState } from "react";
import PopupWithFeedback from "./PopupWithFeedback/PopupWithFeedback";
import { EVENTS, FEEDBACKS, FRIENDS } from "../mocks/user-data";
import PopupWithFriends from "./PopupWithFriends/PopupWithFriends";
import PopupWithEvents from "./PopupWithEvents/PopupWithEvents";

function App() {
  const [events, setEvents] = useState(EVENTS);
  const [friends, setFriends] = useState(FRIENDS);
  const [feedbacks, setFeedbacks] = useState(FEEDBACKS);
  const [selectedFeedback, setSelectedFeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupEventsOpen, setIsEventsPopupOpen] = useState(false);
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
  const [isPopupFriendsOpen, setIsPopupFriendsOpen] = useState(false);

  function handleOpenFeedbackPopup() {
    setIsOpen(true);
  }

  function handleOpenAddFeedbackPopup(feedback) {
    setIsFeedbackPopupOpen(true);
    setSelectedFeedback(feedback);
  }

  function handleOpenFriendsPopup() {
    setIsPopupFriendsOpen(true);
  }

  function handleOpenEventsPopup() {
    setIsEventsPopupOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
    setIsFeedbackPopupOpen(false);
    setIsPopupFriendsOpen(false);
    setIsEventsPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              events={events}
              feedbacks={feedbacks}
              friends={friends}
              onOpenAddFeedbackPopup={handleOpenFeedbackPopup}
              onOpenFeedbackPopup={handleOpenAddFeedbackPopup}
              onOpenFriendsPopup={handleOpenFriendsPopup}
              onOpenEventsPopup={handleOpenEventsPopup}
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
      <PopupWithFriends
        friends={friends}
        isOpen={isPopupFriendsOpen}
        onClose={closePopup}
      ></PopupWithFriends>
      <PopupWithEvents
        events={events}
        isOpen={isPopupEventsOpen}
        onClose={closePopup}
      ></PopupWithEvents>
    </>
  );
}

export default App;
