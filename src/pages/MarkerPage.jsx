import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MarkersCard from "../components/MarkersCard.jsx";

export default function MarkerPage() {
  return (
    <div>
      <Header></Header>
      <div className="path-cont">
        <a href="/" className="path-des">
          GraffsShop
        </a>
        <a>Каталог</a>
      </div>
      <div>
        <MarkersCard />
      </div>
      <Footer />
    </div>
  );
}
