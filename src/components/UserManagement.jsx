import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../utils/mockApi';
import { Box, Button } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <Box p={3}>
      <h1>User Management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={() => alert('Add User Functionality')}>
        Add User
      </Button>
    </Box>
  );
};

export default UserManagement;
