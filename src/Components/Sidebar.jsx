// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Sidebar({ toggleTheme, darkMode }) {
  return (
    <div
      className={`h-screen rounded-xl w-60 ${
        darkMode
          ? "bg-gray-900 text-white shadow-md shadow-white"
          : "bg-gray-200 text-black shadow-md shadow-black"
      } p-4`}
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Kritika Rajput</h2>
        <button
          onClick={toggleTheme}
          className={`ml-4 flex items-center ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
          } p-2 rounded`}
        >
          {darkMode ? (
            <LightModeIcon className="mr-1" />
          ) : (
            <DarkModeIcon className="mr-1" />
          )}
        </button>
      </div>

      <ul className="mb-6 space-y-3">
        <li>
          <Link
            to="/create"
            className={`flex items-center ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            } p-2 rounded`}
          >
            <BookIcon className="mr-2" /> Create Document
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
