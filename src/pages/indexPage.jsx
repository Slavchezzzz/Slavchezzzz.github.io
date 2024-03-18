import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/indexPage.css";

import Slider from "../components/Slider.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import Infinity from "../components/InfinitySlider.jsx";
import CardPopular from "../components/CardPopular.jsx";
export default function IndexPage() {
  return (
    <div className="layout">
      <Header></Header>

      <Slider></Slider>

      <Card></Card>
      <Infinity></Infinity>
      <CardPopular></CardPopular>
      <div className="Page"></div>
      <Footer></Footer>
    </div>
  );
}
