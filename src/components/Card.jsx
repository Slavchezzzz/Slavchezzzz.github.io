import "../styles/Card.css";
import { emplayss } from "./data/data.jsx";
import Heart from "./icons/HeartIcon.jsx";
export default function Card() {
  return (
    <div className="Card-info">
      <h1>New product</h1>
      <div className="card">
        {emplayss.map((emplayss, index) => {
          return (
            <div className="card-item" key={index}>
              <img src={emplayss.img} width={200}></img>
              <span className="card-span">
                Аэрозольная краска {emplayss.name}{" "}
              </span>
              <span>{emplayss.ml} мл</span>
              <h2>{emplayss.price}</h2>
              <div className="Card-pos">
                <a href="#">Подробнее</a>
                <Heart className="heart-icon-card"></Heart>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
