import "./App.css";
import Header from "./Header/Header";
import Promo from "./Main/Promo/Promo";
import AboutUs from "./Main/AboutUs/AboutUs";
import OurAchievements from "./Main/OurAchievements/OurAchievements";

import "./App.css";


function App() {
  return (
    <>
      <Header />
      <main className="main-contant">
        <Promo />
        <AboutUs />
        <OurAchievements />
      </main>
    </>
  );
}

export default App;
