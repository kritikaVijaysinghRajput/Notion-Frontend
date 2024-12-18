import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import DocumentView from "./Components/DocumentView";
import { useAuth } from "@clerk/clerk-react"; // Use Clerk's hook for authentication

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? true : false;
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/documents/:id" element={<DocumentView />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard/*"
          element={<Dashboard toggleTheme={toggleTheme} darkMode={darkMode} />}
        />
        <Route
          path="/create"
          element={<Dashboard toggleTheme={toggleTheme} darkMode={darkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
