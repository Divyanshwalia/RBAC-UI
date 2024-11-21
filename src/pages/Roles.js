import React, { useState, useEffect } from "react";
import { getRoles, addRole, updateRole, deleteRole } from "../services/api";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [permissions] = useState(["Read", "Write", "Delete"]);

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handleAddRole = () => {
    addRole({ id: Date.now(), ...newRole }).then((role) => {
      setRoles([...roles, role]);
      setNewRole({ name: "", permissions: [] });
    });
  };

  const handleUpdateRolePermissions = (roleId, newPermissions) => {
    updateRole(roleId, { permissions: newPermissions }).then((role) => {
      setRoles(roles.map((r) => (r.id === roleId ? role : r)));
    });
  };

  const handleDeleteRole = (roleId) => {
    deleteRole(roleId).then(() => {
      setRoles(roles.filter((role) => role.id !== roleId));
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Roles</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          placeholder="Role Name"
          className="border p-2 mr-2"
        />
        <div>
          <label>Select Permissions:</label>
          {permissions.map((permission) => (
            <label key={permission} className="mr-4">
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => {
                  const newPermissions = newRole.permissions.includes(permission)
                    ? newRole.permissions.filter((p) => p !== permission)
                    : [...newRole.permissions, permission];
                  setNewRole({ ...newRole, permissions: newPermissions });
                }}
              />
              {permission}
            </label>
          ))}
        </div>
        <button onClick={handleAddRole} className="bg-blue-600 text-white p-2 mt-4">
          Add Role
        </button>
      </div>

      <div>
        {roles.map((role) => (
          <div key={role.id} className="mb-4 p-2 bg-gray-200">
            <h3>{role.name}</h3>
            <p>Permissions: {role.permissions.join(", ")}</p>
            <button
              onClick={() => handleUpdateRolePermissions(role.id, ["Read", "Write"])}
              className="bg-yellow-600 text-white p-1"
            >
              Update Permissions
            </button>
            <button
              onClick={() => handleDeleteRole(role.id)}
              className="bg-red-600 text-white p-1"
            >
              Delete Role
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
