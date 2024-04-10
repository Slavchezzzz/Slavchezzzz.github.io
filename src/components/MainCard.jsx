import "../styles/MainCard.css";
import { MainDataCard } from "./data/MainDataCard.jsx";
export default function MainCard() {
  return (
    <div className="Card-info">
      <div className="card-menu">
        {MainDataCard.map((MainDataCard, index) => {
          return (
            <div className="card-item-main" key={index}>
              <img src={MainDataCard.img} width={200}></img>
              <span>Аэрозольная краска {MainDataCard.name} </span>
              <span>{MainDataCard.ml} мл</span>
              <h2>{MainDataCard.price}</h2>
              <div className="Card-pos">
                <a href="#">В корзину</a>
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
