import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/indexPage.css";
import Footer from "../components/Footer.jsx";
import CardMin from "../components/Card.jsx";
import Infinity from "../components/InfinitySlider.jsx";
import CardPopular from "../components/CardPopular.jsx";
import HeaderPhoto from "../components/HeaderPhoto.jsx";
import News from "../components/News.jsx";

export default function IndexPage() {
  return (
    <div className="layout">
      <Header></Header>
      <HeaderPhoto />
      <div className="Page">
        <div className="page-card">
          <h1>Новое поступление</h1>
          <CardMin />
        </div>
        <Infinity />
        <div className="page-card">
          <h1>Популярный товар</h1>
          <CardPopular />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}
