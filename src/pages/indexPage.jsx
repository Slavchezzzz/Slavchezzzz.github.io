import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/indexPage.css";
import Footer from "../components/Footer.jsx";
export default function IndexPage() {
  return (
    <div className="layout">
      <Header></Header>
      <div className="Page">
        <h1>Hello world!</h1>

        <Link to="/test">Home</Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
