import React, { useEffect, useState } from 'react';
import { fetchRoles } from '../utils/mockApi';
import { Box } from '@mui/material';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      const data = await fetchRoles();
      setRoles(data);
    };
    loadRoles();
  }, []);

  return (
    <Box p={3}>
      <h1>Role Management</h1>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(', ')}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RoleManagement;
    