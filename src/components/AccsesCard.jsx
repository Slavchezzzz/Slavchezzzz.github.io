import { accessoriesData } from "./data/accsesData";
import { useContext } from "react";
import "../styles/MainCard.css";
import { CartContext } from "./data/CartContext.js";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function AccsesCard() {
  return (
    <div className="Card-info">
      <div className="card-menu">
        {accessoriesData.map((accessoriesData, index) => {
          return <Card accessoriesData={accessoriesData} key={index} />;
        })}
      </div>
    </div>
  );
}

export function Card({ accessoriesData }) {
  const { cart, setCart } = useContext(CartContext);

  let bucket = "bucket-icon";
  if (cart[accessoriesData.id] != undefined) {
    bucket += " active";
  }

  function handleClick() {
    if (cart[accessoriesData.id] != undefined) {
      delete cart[accessoriesData.id];
    } else {
      cart[accessoriesData.id] = accessoriesData;
    }
    setCart(structuredClone(cart));
    console.log(cart);
  }
  return (
    <div className="card-item-main">
      <img src={accessoriesData.img} width={200}></img>
      <div className="card-description">
        <span>{accessoriesData.name} </span>
        <h2>{accessoriesData.price}$</h2>
      </div>
      <div className="Card-pos">
        <a href="/product">Подробнее</a>
        <FaShoppingCart className={bucket} onClick={handleClick} />
        <FaHeart className="heart-icon" />
      </div>
    </div>
  );
}
