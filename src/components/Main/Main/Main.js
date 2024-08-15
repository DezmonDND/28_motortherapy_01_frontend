import "./Main.css";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Events from "../Events/Events";
import Friends from "../Friends/Friends";
import HelpUs from "../HelpUs/HelpUs";
import OurAchievements from "../OurAchievements/OurAchievements";
import Promo from "../Promo/Promo";
import Feedback from "../Feedback/Feedback";

function Main(props) {
  const { onOpenPopup, onClose } = props;

  return (
    <>
      <main className="main-content">
        <Promo />
        <AboutUs />
        <OurAchievements />
        <Events />
        <Feedback onOpenPopup={onOpenPopup} onClose={onClose}></Feedback>
        <ContactUs />
        <HelpUs />
        <Friends />
      </main>
    </>
  );
}

export default Main;
