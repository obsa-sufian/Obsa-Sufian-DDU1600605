import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');

  const saveToken = (newToken) => {
    localStorage.setItem('adminToken', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, setToken: saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

