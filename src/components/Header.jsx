import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Hader() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-up">
          {/* <a className="header-link" href="#">
            <span>Калькулятор доставки</span>
          </a>
          <a className="header-link" href="#">
            <span>Где мой заказ</span>
          </a> */}

          <a className="header-link" href="#">
            <span>+7(981)-726-57-89</span>
          </a>
        </div>
        <div class="header-bot">
          <nav className="container">
            <img className="header-bot-logo" src="../logo.png"></img>

            <div className="header-bot-list">
              <ul class="nav-list">
                <li>
                  <Link to="/test">Граффити</Link>
                </li>
                <li>
                  <a href="">Бренды</a>
                </li>
                <li>
                  <a href="">Одежда</a>
                </li>
                <li>
                  <a href="">Обувь</a>
                </li>
                <li>
                  <a href="">Скидки</a>
                </li>
                <li>
                  <a href="">Новинки</a>
                </li>
              </ul>
            </div>
            {/* <div className="header-bot-tel">
              <img
                src="./telephone.svg"
                className="header-svg-telephone"
                href="tel"
              ></img>
              <div className="header-list-tel">
                <a href="tel:89818265788">+7 981 826 57 88</a>
                <a href="tel:89119109578">+7 911 910 95 78</a>
                <noindex>
                  <a rel="nofollow" href="" className="contact-recall">
                    <span>Обратный звонок</span>
                  </a>
                </noindex>
              </div>
            </div> */}
            <div className="header-bot-bucket">
              <div className="header-bot-right-info">
                <img src="./bucket.svg" className="icon-bucket" href="#"></img>
                <div className="bucket-botom">
                  <a href="#">Корзина</a>
                </div>
              </div>
              <div className="header-bot-right-info">
                <img src="./heart.svg" className="icon-bucket" href="#"></img>
                <div className="bucket-botom">
                  <a href="#">Избранное</a>
                </div>
              </div>
              <div className="header-bot-right-info">
                <img
                  src="./user.svg"
                  className="icon-bucket-user"
                  href="#"
                ></img>
                <div className="bucket-botom">
                  <a href="#">Войти</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
