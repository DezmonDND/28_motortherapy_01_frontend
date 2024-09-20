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
import { useEffect } from "react";
import { api } from "../utils/api";

function App() {
  // const [events, setEvents] = useState(EVENTS);
  const [events, setEvents] = useState([]);
  const [friends, setFriends] = useState(FRIENDS);
  // const [feedbacks, setFeedbacks] = useState(FEEDBACKS);
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupEventsOpen, setIsEventsPopupOpen] = useState(false);
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
  const [isPopupFriendsOpen, setIsPopupFriendsOpen] = useState(false);

  useEffect(() => {
    Promise.all([api.getEvents(), api.getFeedbacks()])
      .then(([events, feddbacks]) => {
        setEvents(events.results);
        setFeedbacks(feddbacks.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setEvents, setFeedbacks]);

  function handleAddFeedback(values) {
    api
      .addFeedback(values)
      .then((newFeedback) => {
        setFeedbacks([newFeedback, ...feedbacks]);
        closePopup();
      })
      .catch((e) => console.log(e));
  }

  function handleAddContact(values) {
    api
      .contactUs(values)
      .then(() => {
        closePopup();
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
              handleAddContact={handleAddContact}
            ></Main>
          }
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <PopupWithForm
        isOpen={isOpen}
        onClose={closePopup}
        handleAddFeedback={handleAddFeedback}
      ></PopupWithForm>
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
