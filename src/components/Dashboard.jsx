import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Dashboard = () => (
  <Box p={3} textAlign="center">
    <h1>RBAC Dashboard</h1>
    <Button variant="contained" color="primary" component={Link} to="/users" style={{ margin: '10px' }}>
      Manage Users
    </Button>
    <Button variant="contained" color="secondary" component={Link} to="/roles" style={{ margin: '10px' }}>
      Manage Roles
    </Button>
  </Box>
);

export default Dashboard;
