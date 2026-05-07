import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../services/api';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials);
      setToken(data.token);
      navigate('/admin/contacts');
    } catch (err) {
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2>Admin Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" required
              value={credentials.username} onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required
              value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;