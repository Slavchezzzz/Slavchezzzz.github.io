import { NewProductData } from "./data/NewProductData";
import { useContext } from "react";
import "../styles/MainCard.css";
import { CartContext } from "./data/CartContext.js";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function NewProduct() {
  return (
    <div className="Card-info">
      <div className="card-menu">
        {NewProductData.map((NewProductData, index) => {
          return <Card NewProductData={NewProductData} key={index} />;
        })}
      </div>
    </div>
  );
}

export function Card({ NewProductData }) {
  const { cart, setCart } = useContext(CartContext);

  let bucket = "bucket-icon";
  if (cart[NewProductData.id] != undefined) {
    bucket += " active";
  }

  function handleClick() {
    if (cart[NewProductData.id] != undefined) {
      delete cart[NewProductData.id];
    } else {
      cart[NewProductData.id] = NewProductData;
    }
    setCart(structuredClone(cart));
    console.log(cart);
  }
  return (
    <div className="card-item-main">
      <img src={NewProductData.img} width={200}></img>
      <div className="tag-new">Новинка</div>
      <div className="card-description">
        <span>{NewProductData.name} </span>
        <span>{NewProductData.ml} мл</span>
        <h2>{NewProductData.price}$</h2>
      </div>
      <div className="Card-pos">
        <a href="/product">Подробнее</a>
        <FaShoppingCart className={bucket} onClick={handleClick} />
        <FaHeart className="heart-icon" />
      </div>
    </div>
  );
}