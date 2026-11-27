import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <div className="page container notfound">
      <Seo title="Page not found" description="This page does not exist." />
      <h1>404</h1>
      <p className="lead">This page does not exist.</p>
      <Link className="btn" to="/">Back home</Link>
    </div>
  );
}
