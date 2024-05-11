import "../styles/HeaderPhoto.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function HeaderPhoto() {
  return (
    <div>
      <div className="header-main">
        <div className="header-main-text">
          <h1>Graffs Shop</h1>
          <h3>Начни рисовать вместе с нами прямо сейчас!</h3>
          <a href="/test">Каталог</a>
          <div className="header-main-icon">
            <FaTelegram className="icon-dop" />
            <FaInstagramSquare className="icon-dop" />
          </div>
        </div>
      </div>
    </div>
  );
}
