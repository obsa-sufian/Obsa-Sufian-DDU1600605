import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Navigation from './Navigation';
import logo from '../../images/obsa-photo.png';

const Header = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Obsa logo"
            className="d-inline-block align-top rounded-circle me-2"
            style={{ width: '42px', height: '42px', objectFit: 'cover' }}
          />
          <span>OBSA SUFIAN</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Navigation />
          <ul className="navbar-nav ms-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="adminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="adminDropdown">
                {!token ? (
                  <li><Link className="dropdown-item" to="/admin/login">Login</Link></li>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/admin/contacts">Messages</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

