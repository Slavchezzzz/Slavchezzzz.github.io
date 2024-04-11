import "../styles/Header.css";
import { Link } from "react-router-dom";
import BucketIcon from "./icons/BuckeIcon";
import ProfileIcon from "./icons/ProfileIcon";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Hader() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav class="navbar">
        <img src="./logo.png"></img>
        <div className="header-info">
          <ul class="menu-links">
            <li>
              <a href="">Граффити</a>
            </li>
            <li>
              <a href="">Маркеры</a>
            </li>
            <li>
              <a href="">Акссесуары</a>
            </li>
            <li>
              <a href="">Новинки</a>
            </li>
            <li>
              <a href="">Скидки</a>
            </li>
          </ul>
        </div>
        <div className="header-icon">
          <FaShoppingCart className="icon" />
          <a href="./login">
            <FaUser className="icon" />
          </a>
        </div>
      </nav>
      <div className="header-main">
        <div className="header-main-text">
          <h1>Graffs Shop</h1>
          <h3>Начни рисовать вместе с нами прямо сейчас!</h3>
          <a href="#">Каталог</a>
        </div>
      </div>
    </header>
  );
}
