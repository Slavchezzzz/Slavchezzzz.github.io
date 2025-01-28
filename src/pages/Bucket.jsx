import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { CartContext } from "../components/data/CartContext.js";
import "../styles/Bucket.css";
import { Link } from "react-router-dom";

export default function Bucket() {
  const { cart, setCart } = useContext(CartContext);

  // Функция удаляет товар из корзины
  function handleRemoveItem(itemId) {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCart(updatedCart);
  }

  // Считаем общую сумму заказа
  const totalPrice = Object.keys(cart).reduce((total, key) => {
    const item = cart[key];
    return total + item.price;
  }, 0);

  //  Считаем общую сумму скидки
  const salePrice = Object.keys(cart).reduce((total, key) => {
    const item = cart[key];
    if (item.old_price !== 0) {
      let raz = item.old_price - item.price;
      return total + raz;
    }
    return 0;
  }, 0);

  // Считаем скидку для каждого товара отдельно
  const calculateDiscountedPrice = (old_price, price) => {
    if (old_price !== 0) {
      return old_price - price;
    }
    return 0;
  };

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
        <h1>Корзина</h1>
        {Object.keys(cart).length > 0 ? (
          <div>
            <div className="itog">
              <div className="cart-itog">
                <p>Количсетво товара в корзине: {Object.keys(cart).length}</p>
                <p>Скидка: {salePrice}₽</p>
                <p>Итого: {totalPrice}₽</p>
                {totalPrice >= 500 ? (
                  <Link to={"/Order"}> Оформить заказ</Link>
                ) : (
                  <p>Цена меньше 500</p>
                )}
              </div>
            </div>
            <div className="bucket-cart-tabl">
              <p>Название</p>
              <p>Цена</p>
              <p>Скидка</p>
            </div>
          </div>
        ) : (
          "Ваша корзина пуста! :("
        )}
        <div className="cart">
          {Object.keys(cart).map((key) => {
            return (
              <div className="card-bucket">
                <div className="bucket-img">
                  <img src={cart[key].img} width={200}></img>
                </div>
                <div className="card-bucket-des">
                  <p>{cart[key].name}</p>
                  <p>{cart[key].price}₽</p>
                  <p>
                    {calculateDiscountedPrice(
                      cart[key].old_price,
                      cart[key].price
                    )}
                    ₽
                  </p>
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
