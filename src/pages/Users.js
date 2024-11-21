import React, { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleAddUser = () => {
    addUser({ id: Date.now(), ...newUser }).then((user) => {
      setUsers([...users, user]);
      setNewUser({ name: "", role: "", status: "Active" });
    });
  };

  const handleEditUser = (userId, updatedUser) => {
    updateUser(userId, updatedUser).then((user) => {
      setUsers(users.map((u) => (u.id === userId ? user : u)));
    });
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId).then(() => {
      setUsers(users.filter((user) => user.id !== userId));
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Name"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          placeholder="Role"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddUser} className="bg-blue-600 text-white p-2">
          Add User
        </button>
      </div>

      <div>
        {users.map((user) => (
          <div key={user.id} className="flex justify-between mb-4 p-2 bg-gray-200">
            <span>{user.name}</span>
            <span>{user.role}</span>
            <span>{user.status}</span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-600 text-white p-1"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditUser(user.id, { status: user.status === "Active" ? "Inactive" : "Active" })}
              className="bg-yellow-600 text-white p-1"
            >
              Toggle Status
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
