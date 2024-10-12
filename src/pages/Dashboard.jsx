import React from "react";
import Sidebar from "../Components/Sidebar";
import CreateDocument from "../Components/CreateDocument";
import { useLocation } from "react-router-dom";

function Dashboard({ toggleTheme, darkMode }) {
  const location = useLocation();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen`}
    >
      <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="flex-grow p-8">
        {location.pathname === "/create" ? (
          <CreateDocument />
        ) : (
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
