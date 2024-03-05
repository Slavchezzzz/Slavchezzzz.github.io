import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="footer-info">
          <h2>Информация</h2>
          <ul class="footer-list">
            <li>
              <a href="">Скидки</a>
            </li>
            <li>
              <a href="">Новинки</a>
            </li>
            <li>
              <a href="">Как офрмить заказ</a>
            </li>
            <li>
              <a href="">Доставка и оплата</a>
            </li>
            <li>
              <a href="">Обмен и возврат</a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h2>Контакты</h2>
          <ul class="footer-list">
            <li>
              <a href="tel:89818265788">+7 (981)-826-57-88</a>
            </li>
            <li>
              <a href="mailto:vlad@htmlbook.ru">grafitimarket@gmail.com</a>
            </li>
            <li>
              <a href="">Адреса магазинов</a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h2>О нас</h2>
          <ul class="footer-list">
            <li>
              <a href="">О проекте</a>
            </li>
            <li>
              <a href="">Реклама</a>
            </li>
            <li>
              <a href="">Конфиденциальность</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
