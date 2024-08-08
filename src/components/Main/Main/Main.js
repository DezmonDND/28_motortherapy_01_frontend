import "./Main.css";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Events from "../Events/Events";
import Friends from "../Friends/Friends";
import HelpUs from "../HelpUs/HelpUs";
import OurAchievements from "../OurAchievements/OurAchievements";
import Promo from "../Promo/Promo";

function Main() {
  return (
    <>
      <main className="main-content">
        <Promo />
        <AboutUs />
        <OurAchievements />
        <Events />
        <ContactUs />
        <HelpUs />
        <Friends />
      </main>
    </>
  );
}

export default Main;
