import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="navbar-nav ms-auto">
    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/forms">Form Layouts</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
  </ul>
);
export default Navigation;

