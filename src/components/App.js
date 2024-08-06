import "./App.css";
import Header from "./Header/Header";
import Promo from "./Main/Promo/Promo";
import AboutUs from "./Main/AboutUs/AboutUs";
import OurAchievements from "./Main/OurAchievements/OurAchievements";

import "./App.css";
import HelpUs from "./Main/HelpUs/HelpUs";
import Friends from "./Main/Friends/Friends";
import Footer from "./Main/Footer/Footer";
import ContactUs from "./Main/ContactUs/ContactUs";
import Events from "./Main/Events/Events";

function App() {
  return (
    <>
      <Header />
      <main className="main-contant">
        <Promo />
        <AboutUs />
        <OurAchievements />
        <Events />
        <ContactUs />
        <HelpUs />
        <Friends />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
