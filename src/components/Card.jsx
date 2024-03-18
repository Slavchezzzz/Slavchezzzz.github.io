import "../styles/Card.css";
import { emplayss } from "./data";
export default function Card() {
  return (
    <div className="Card-info">
      <h1>New product</h1>
      <div className="card">
        {emplayss.map((emplayss, index) => {
          return (
            <div className="card-item" key={index}>
              <img src={emplayss.img} width={200}></img>
              <span>Аэрозольная краска {emplayss.name} </span>
              <span>{emplayss.ml} мл</span>
              <h2>{emplayss.price}</h2>
              <div className="Card-pos">
                <a href="#">Подробнее</a>
                <img
                  src="../heart.svg"
                  className="heart-icon"
                  href="#"
                  width={35}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
