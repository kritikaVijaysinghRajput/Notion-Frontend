import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen`}
    >
      <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />

      <div className="flex-grow p-8">
        {/* Navbar */}
        <nav
          className={`flex justify-between items-center ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } p-4 rounded-md shadow-md`}
        >
          <div className="text-2xl font-bold">Dashboard</div>
          <div>
            <button className="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
              Menu Item 1
            </button>
            <button className="ml-4 px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
              Menu Item 2
            </button>
          </div>
        </nav>

        <h1 className="text-3xl font-bold mt-6">
          Good afternoon, Kritika Rajput
        </h1>

        {/* Main content grid */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Recently Visited */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Recently Visited</h2>
            <ul className="space-y-2">
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Meal Planner
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Overnight Oats
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Personal Website
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Turkey Stuffed Peppers
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Learn</h2>
            <ul className="space-y-2">
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                What is a database?
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                What is a block?
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Create your first page
              </li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
            <ul className="space-y-2">
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Team Meeting
              </li>
              <li
                className={`${
                  darkMode ? "bg-gray-700 text-white" : "bg-white"
                } p-4 rounded shadow`}
              >
                Project Deadline
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
