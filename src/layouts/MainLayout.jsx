import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ toggleTheme, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen`}
    >
      <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
