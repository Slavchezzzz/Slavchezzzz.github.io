import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AccsesCard from "../components/AccsesCard.jsx";
export default function AccesPage() {
  return (
    <div>
      <Header />
      <div className="path-cont">
        <a href="/" className="path-des">
          GraffsShop
        </a>
        <a>Каталог</a>
      </div>
      <div>
        <AccsesCard />
      </div>
      <Footer />
    </div>
  );
}
