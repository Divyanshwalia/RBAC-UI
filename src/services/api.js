// Mock data
let users = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" }
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] }
  ];
  
  // Simulate API calls for users
  export const getUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500);
    });
  };
  
  export const addUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users.push(user);
        resolve(user);
      }, 500);
    });
  };
  
  export const updateUser = (userId, updatedUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.map((user) =>
          user.id === userId ? { ...user, ...updatedUser } : user
        );
        resolve(updatedUser);
      }, 500);
    });
  };
  
  export const deleteUser = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.filter((user) => user.id !== userId);
        resolve(userId);
      }, 500);
    });
  };
  
  // Simulate API calls for roles
  export const getRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 500);
    });
  };
  
  export const addRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles.push(role);
        resolve(role);
      }, 500);
    });
  };
  
  export const updateRole = (roleId, updatedRole) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.map((role) =>
          role.id === roleId ? { ...role, ...updatedRole } : role
        );
        resolve(updatedRole);
      }, 500);
    });
  };
  
  export const deleteRole = (roleId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.filter((role) => role.id !== roleId);
        resolve(roleId);
      }, 500);
    });
  };
  