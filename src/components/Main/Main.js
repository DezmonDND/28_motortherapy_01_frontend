import "./Main.css";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Events from "../Events/Events";
import Friends from "../Friends/Friends";
import HelpUs from "../HelpUs/HelpUs";
import OurAchievements from "../OurAchievements/OurAchievements";
import Promo from "../Promo/Promo";
import Feedbacks from "../Feedbacks/Feedbacks";

function Main(props) {
  const { onOpenAddFeedbackPopup, onOpenFeedbackPopup, onClose, feedbacks } =
    props;

  return (
    <>
      <main className="main-content">
        <Promo />
        <AboutUs />
        <OurAchievements />
        <Events />
        <Feedbacks
          feedbacks={feedbacks}
          onOpenAddFeedbackPopup={onOpenAddFeedbackPopup}
          onOpenFeedbackPopup={onOpenFeedbackPopup}
          onClose={onClose}
        ></Feedbacks>
        <ContactUs />
        <HelpUs />
        <Friends />
      </main>
    </>
  );
}

export default Main;
