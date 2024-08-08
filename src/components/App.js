import Header from "./Header/Header";
import Footer from "./Main/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Main/NotFound/NotFound";
import Main from "./Main/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/404" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
