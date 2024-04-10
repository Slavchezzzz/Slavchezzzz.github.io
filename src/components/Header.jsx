import "../styles/Header.css";
import { Link } from "react-router-dom";
import BucketIcon from "./icons/BuckeIcon";
import ProfileIcon from "./icons/ProfileIcon";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Hader() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="header-up">
          <a className="header-link" href="#">
            <span>+7(981)-726-57-89</span>
          </a>
        </div>
        <nav class="header-bot">
          <nav className="container">
            <div className="header-bot-left">
              <Link to="/">
                <img className="header-bot-logo" src="../logo.png"></img>
              </Link>

              <div className="header-bot-list">
                <ul class="nav-list">
                  <li>
                    <Link to="/test">Граффити</Link>
                  </li>
                  <li>
                    <a href="">Маркеры</a>
                  </li>
                  <li>
                    <a href="">Акссесуары</a>
                  </li>
                  <li>
                    <Link to="/Brand">Бренды</Link>
                  </li>
                  <li>
                    <a href="">Скидки</a>
                  </li>
                  <li>
                    <a href="">Новинки</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-bot-bucket">
              <div className="header-bot-right-info">
                <FaShoppingCart
                  onClick={() => setCartOpen((cartOpen = !cartOpen))}
                  className={`shop-card-icon ${cartOpen && "active"}`}
                />
                {cartOpen && <div className="shop-bucket"></div>}
              </div>
              <div className="header-bot-right-info">
                <FaHeart
                  onClick={() => setCartOpen((cartOpen = !cartOpen))}
                  className={`shop-card-icon ${cartOpen && "active"}`}
                />
                <div className="bucket-botom"></div>
              </div>
              <div className="header-bot-right-info">
                <ProfileIcon className="header-icon"></ProfileIcon>
                <div className="bucket-botom">
                  <li>
                    <Link to="/login">Войти</Link>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </header>
    </div>
  );
}
