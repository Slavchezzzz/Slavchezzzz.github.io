import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
export default function TestPage() {
  return (
    <div>
      <Header></Header>
      <h1>Cool</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
