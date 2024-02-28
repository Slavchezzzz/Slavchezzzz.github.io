import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/indexPage.css";
export default function IndexPage() {
  return (
    <div>
      <Header></Header>
      <div className="Page">
        {/* <h1>Hello world!</h1>
        <Link to="/test">Home</Link> */}
      </div>
    </div>
  );
}
