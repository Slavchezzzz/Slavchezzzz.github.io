import "../styles/Card.css";
import { dataCard } from "./dataCardPopular";
export default function CardPopular() {
  return (
    <div className="Card-info">
      <h1>Popular</h1>
      <div className="card">
        {dataCard.map((dataCard, index) => {
          return (
            <div className="card-item" key={index}>
              <img src={dataCard.img} width={200}></img>
              <span>Аэрозольная краска {dataCard.name} </span>
              <span>{dataCard.ml} мл</span>
              <h2>{dataCard.price}</h2>
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
