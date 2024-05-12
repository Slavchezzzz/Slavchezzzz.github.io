import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { CartContext } from "./data/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  let [cartOpen, setCartOpen] = useState(false);

  function cliclOpen() {
    setCartOpen(true);
  }

  function clickClose() {
    setCartOpen(false);
  }

  return (
    <header>
      <nav className="navbar">
        <FiMenu
          id="bur"
          className="js-burger-open burger-menu"
          onClick={cliclOpen}
        />
        <Link to={"/"}>
          <img src="./logo.png"></img>
        </Link>
        <div className="header-info">
          <SideBar
            className={"js-burger" + (cartOpen ? " active" : "")}
            onClickClose={clickClose}
          />
        </div>
        <div className="header-icon">
          <Link to="/bucket">
            <FaShoppingCart className="icon" />
          </Link>
          <p>{Object.keys(cart).length}</p>
          <Link to="/FavPage">
            <FaHeart className="icon" />
          </Link>
          <a href="/login">
            <FaUser className="icon" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function SideBar({ className, onClickClose }) {
  return (
    <ul class={"menu-links" + (className ? " " + className : "")}>
      <FiX className="header-fix js-burger-close" onClick={onClickClose} />
      <li>
        <a href="/test">Граффити</a>
      </li>
      <li>
        <a href="/Marker">Маркеры</a>
      </li>
      <li>
        <a href="/accessories">Акссесуары</a>
      </li>
      <li>
        <a href="/NewProduct">Новинки</a>
      </li>
      <li>
        <a href="/SalePage">Скидки</a>
      </li>
      <li>
        <a href="/Brand">Бренды</a>
      </li>
    </ul>
  );
}
