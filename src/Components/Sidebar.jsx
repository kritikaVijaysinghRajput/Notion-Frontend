import React from "react";
import { Link } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  DarkMode,
  LightMode,
  Menu,
  Nightlight,
} from "@mui/icons-material";
import { useState } from "react";

const Sidebar = ({ documents, onToggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-900 text-white"
      } h-screen w-64 p-4 transition-colors duration-300`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex items-center">
          {darkMode ? (
            <DarkMode
              className="mr-2 cursor-pointer"
              onClick={onToggleDarkMode}
            />
          ) : (
            <LightMode
              className="mr-2 cursor-pointer"
              onClick={onToggleDarkMode}
            />
          )}
          Notebook
        </h2>
        <Menu className="cursor-pointer md:hidden" onClick={handleMenuToggle} />
      </div>

      <div className={`mt-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <Link
          to="/create"
          className={`block p-2 hover:${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          } transition-colors duration-300`}
        >
          Create New Document
        </Link>
        <ul>
          {documents.map((doc) => (
            <li
              key={doc._id}
              className={`p-2 hover:${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors duration-300`}
            >
              <Link to={`/documents/${doc._id}`} className="block">
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
