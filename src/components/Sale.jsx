import { NewProductData } from "./data/NewProductData";
import { useContext } from "react";
import "../styles/MainCard.css";
import { CartContext } from "./data/CartContext.js";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SaleData } from "./data/SaleData.jsx";

export default function Sale() {
  return (
    <div className="Card-info">
      <div className="card-menu">
        {SaleData.map((SaleData, index) => {
          return <Card SaleData={SaleData} key={index} />;
        })}
      </div>
    </div>
  );
}

export function Card({ SaleData }) {
  const { cart, setCart } = useContext(CartContext);

  let bucket = "bucket-icon";
  if (cart[SaleData.id] != undefined) {
    bucket += " active";
  }

  function handleClick() {
    if (cart[SaleData.id] != undefined) {
      delete cart[SaleData.id];
    } else {
      cart[SaleData.id] = SaleData;
    }
    setCart(structuredClone(cart));
    console.log(cart);
  }
  return (
    <div className="card-item-main">
      <img src={SaleData.img} width={200}></img>
      <div className="tag-new">Скидка</div>
      <div className="card-description">
        <span>{SaleData.name} </span>
        <span>{SaleData.ml} мл</span>
        <div className="old">
          <h3>{SaleData.old_price}$</h3>
        </div>
        <div className="new">
          <h2>{SaleData.price}$</h2>
        </div>
      </div>
      <div className="Card-pos">
        <a href="/product">Подробнее</a>
        <FaShoppingCart className={bucket} onClick={handleClick} />
        <FaHeart className="heart-icon" />
      </div>
    </div>
  );
}