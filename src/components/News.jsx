import "../styles/News.css";

export default function News() {
  return (
    <div className="News">
      <div className="page-card-news">
        <h1>Новости</h1>
      </div>
      <div className="main-news">
        {/* Большой блок */}
        <div className="big-news">
          <div className="article-wrap">
            <div className="article-avatar">
              <img src="../slide/slide1-1.jpg" alt="" />
            </div>
            <div className="article_text">
              <h2>
                Работа интернет-магазина на <br />
                майские праздники
              </h2>
              <a href="">Подробнее...</a>
            </div>
          </div>
          <div className="article-wrap">
            <div className="article-avatar">
              <img src="../slide/slide7.jpg" alt="#" />
            </div>
            <div className="article_text">
              <h2>Новинки месяца</h2>
              <a href="">Подробнее...</a>
            </div>
          </div>
        </div>
        {/* Маленький блок */}
        <div className="small-news">
          <div className="article-wrap-small">
            <div className="article-avatar">
              <img src="../slide/slide10.jpg" alt="" />
            </div>
            <div className="article_text">
              <h2>Дарим маркеры!</h2>
              <a href="">Подробнее...</a>
            </div>
          </div>
          <div className="article-wrap-small">
            <div className="article-avatar">
              <img src="../slide/slide8.jpg" alt="" />
            </div>
            <div className="article_text">
              <h2>SABOTAGE в GraffsShop</h2>
              <a href="">Подробнее...</a>
            </div>
          </div>
          <div className="article-wrap-small">
            <div className="article-avatar">
              <img src="../slide/slide9.jpg" alt="" />
            </div>
            <div className="article_text">
              <h2>Molotow и Flame по новой цене!</h2>
              <a href="">Подробнее...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
