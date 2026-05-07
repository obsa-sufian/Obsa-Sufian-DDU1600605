const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const submitContact = async (data) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const login = async (credentials) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const getContacts = async (token) => {
  const res = await fetch(`${API_URL}/api/admin/contacts`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Unauthorized or fetch error');
  return res.json();
};