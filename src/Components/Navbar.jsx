import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="text-4xl font-extrabold ">
            <Link to="/">Notebook</Link>
          </div>

          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 font-semibold  hover:text-black"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-gray-700 font-semibold text-white rounded-full shadow-sm hover:shadow-lg hover:bg-gray-500"
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
