import CardAchievements from "../CardAchievements/CardAchievements";
import "./OurAchievements.css";
import People from "./images/People.png"
import InLove from "./images/InLove.png"
import Confetti from "./images/Confetti.png"
import Doll from "./images/Doll.png"


function OurAchievements() {
  return (
    <div className="achievements">
      <CardAchievements img={People} alt="изображение людей">Более 20-ти активных участников проекта</CardAchievements>
      <CardAchievements img={InLove} alt="изображение людей">Дарим неизмеримое количество эмоций</CardAchievements>
      <CardAchievements img={Confetti} alt="изображение людей">Проводим от 10-ти мероприятий круглый год</CardAchievements>
      <CardAchievements img={Doll} alt="изображение людей">Дарим радость и детям, и взрослым</CardAchievements>
    </div>
  )
}

export default OurAchievements;