import { CartContext } from "../components/data/CartContext.js";
import { useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Order.css";

export default function Order() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="page-order">
      <Header />
      <div className="main-order">
        <h1>Оформление заказа</h1>
        <div className="back-order">
          <div className="delivery">
            <h2>Способ доставки</h2>
          </div>
          <div className="payment">
            <h2>Спопсоб оплаты</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
