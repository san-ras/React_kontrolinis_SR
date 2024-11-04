import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top border-bottom border-3 border-success"
      style={{ backgroundColor: "rgb(221, 253, 193)" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active fs-4 ms-5" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link fs-4" to="/add">
            Add book
          </Link>{" "}
          <Link className="nav-item nav-link fs-4" to="/review">
            Add review
          </Link>
        </div>
      </div>
    </nav>
  );
};
