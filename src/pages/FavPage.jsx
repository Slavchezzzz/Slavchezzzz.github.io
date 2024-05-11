import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { CartContext } from "../components/data/CartContext.js";
import "../styles/Bucket.css";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "USD",
});

export default function FavPage() {
  const { cart, setCart } = useContext(CartContext);

  function alr() {
    alert("Ваш заказ оформлен!");
  }

  function handleRemoveItem(itemId) {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCart(updatedCart);
  }

  const totalPrice = Object.keys(cart).reduce((total, key) => {
    const item = cart[key];
    return total + item.price;
  }, 0);

  return (
    <div className="bucket">
      <Header />
      <div className="path-cont">
        <a href="/" className="path-des">
          GraffsShop
        </a>
        <a href="/test" className="path-des">
          Каталог
        </a>
        <a>Корзина</a>
      </div>
      <div className="bucket-main">
        <h1>Избранное</h1>
        {Object.keys(cart).length > 0 ? (
          <div className="itog">
            <div className="cart-itog">
              <p>Количсетво товара в избранное: {Object.keys(cart).length}</p>
              <p>Итого: {totalPrice}$</p>
              <Link to="/bucket">
                <button>Оформить заказ</button>
              </Link>
            </div>
          </div>
        ) : (
          "У вас нет избранного! :("
        )}
        <div className="cart">
          {Object.keys(cart).map((key) => {
            return (
              <div className="card-bucket">
                <div className="bucket-img">
                  <img src={cart[key].img} width={250}></img>
                </div>
                <div className="card-bucket-des">
                  <h2>{cart[key].name}</h2>
                  <p>{cart[key].price}$</p>
                  <button onClick={() => handleRemoveItem(cart[key].id)}>
                    Удалить
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer className="footer-bucket" />
    </div>
  );
}
