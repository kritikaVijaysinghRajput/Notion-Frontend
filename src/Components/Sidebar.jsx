import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"; // For toggling night mode

function Sidebar({ toggleTheme, darkMode }) {
  return (
    <div
      className={`h-screen w-64 p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Kritika Rajput</h2>
      </div>

      <ul className="mb-6 space-y-3">
        <li>
          <Link
            to="/"
            className={`block hover:${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            } p-2 rounded`}
          >
            Home
          </Link>
        </li>
      </ul>

      <ul className="space-y-3">
        <li>
          <Link
            to="/calendar"
            className={`block hover:${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            } p-2 rounded`}
          >
            Calendar
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`block hover:${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            } p-2 rounded`}
          >
            Settings
          </Link>
        </li>
      </ul>

      {/* Night mode toggle */}
      <div className="mt-8">
        <button
          onClick={toggleTheme}
          className="w-full text-center py-2 px-4 border rounded bg-indigo-500 text-white hover:bg-indigo-600"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
