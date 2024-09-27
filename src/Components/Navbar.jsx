import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">Notion Clone</Link>
          </div>

          {/* Menu Links */}
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-black"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
