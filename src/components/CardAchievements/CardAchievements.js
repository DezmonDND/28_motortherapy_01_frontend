import "./CardAchievements.css";

function CardAchievements(props) {
  return (
    <div className="card-achievements">
      <img className="card-achievements__img" src={props.img} alt={props.alt} />
      <p className="card-achievements__paragraph">{props.children}</p>
    </div>
  );
}

export default CardAchievements;
