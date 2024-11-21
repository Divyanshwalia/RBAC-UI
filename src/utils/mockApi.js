const API_BASE = 'http://localhost:3001';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE}/users`);
  return await response.json();
};

export const fetchRoles = async () => {
  const response = await fetch(`${API_BASE}/roles`);
  return await response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

export const createRole = async (roleData) => {
  const response = await fetch(`${API_BASE}/roles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(roleData),
  });
  return await response.json();
};

