import Header from "./Header/Header";
import Footer from "./Main/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Main/NotFound/NotFound";
import Main from "./Main/Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenFeedbackPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onOpenPopup={handleOpenFeedbackPopup}
              onClose={closePopup}
            ></Main>
          }
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <PopupWithForm isOpen={isOpen} onClose={closePopup}></PopupWithForm>
    </>
  );
}

export default App;
