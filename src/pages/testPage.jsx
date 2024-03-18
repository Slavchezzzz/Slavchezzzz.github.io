import { Link } from "react-router-dom";
import "../styles/testPage.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// import Slider from "../components/Slider.jsx";
export default function TestPage() {
  return (
    <div className="main-page">
      <Header></Header>
      <div className="main">
        <h1>Cool</h1>
        <Link to="/">Back</Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
