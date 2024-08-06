import "./AboutUs.css";
import AboutUsPhoto from "./images/photo-about-us.jpg"

function AboutUs() {
  return (
    <div className="about-us" id="aboutUs">
      <div className="about-us-text">
        <h2 className="about-us__title">О нас</h2>
        <p className="about-us__paragraph">
          МотоТерапия — это сообщество людей, связанных общими интересами — мотоциклы и большие добрые сердца.
        </p>
        <p className="about-us__paragraph">
          Мы проводим праздники для детей с ограниченными возможностями
          и помогаем детским центрам.
        </p>
        <p className="about-us__paragraph">
          Исполнение мечт — наш конёк.
        </p>
      </div>
      <img className="about-us__photo" src={AboutUsPhoto} alt="наша фотография" />
        <button className="about-us__button">
          Связаться с нами
        </button>
    </div>
  )
}

export default AboutUs;