import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Sidebar from "../Components/Sidebar";
import CreateDocument from "../Components/CreateDocument";
import { Menu } from "@mui/icons-material";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchDocuments = async () => {
    try {
      const userId = localStorage.getItem("user-id");

      const response = await fetch("http://localhost:5000/api/documents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-id": userId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleDocumentCreated = (newDocument) => {
    setDocuments((prevDocuments) => [...prevDocuments, newDocument]);
    toast.success("Document created successfully!");
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex-none md:hidden">
        <Menu
          className="cursor-pointer p-4 text-black"
          onClick={toggleMobileMenu}
        />
      </div>
      <Sidebar
        documents={documents}
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex-1 p-4">
        <CreateDocument onDocumentCreated={handleDocumentCreated} />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Dashboard;
