import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Users from "./pages/Users";
import Roles from "./pages/Roles";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header Section */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">RBAC Dashboard</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link to="/users" className="hover:text-blue-600">
                Users
              </Link>
              <Link to="/roles" className="hover:text-blue-600">
                Roles
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Section */}
        <main className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Manage Roles & Permissions Effortlessly
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A simple, user-friendly interface to manage users, roles, and
              permissions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/users"
                className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500"
              >
                Manage Users
              </Link>
              <Link
                to="/roles"
                className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full shadow-md hover:bg-gray-200"
              >
                Manage Roles
              </Link>
            </div>
          </div>
        </main>

        {/* Routes */}
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          {/* You can add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
