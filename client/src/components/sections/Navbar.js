
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Oscar.dev</Link>

      <div>
        <Link className="nav-link d-inline text-white me-3" to="/">Home</Link>
        <Link className="nav-link d-inline text-white me-3" to="/projects">Projects</Link>
        <Link className="nav-link d-inline text-white" to="/about">About</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

