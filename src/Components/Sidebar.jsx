import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const userId = localStorage.getItem("user-id"); // Get the user ID from localStorage

        const response = await fetch("http://localhost:5000/api/documents", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "user-id": userId, // Include user ID in headers to authenticate the request
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch documents");
        }

        const data = await response.json();
        setDocuments(data); // Store fetched documents in state
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <h2 className="text-lg font-bold p-4">Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc._id} className="p-2 hover:bg-gray-700">
            <Link to={`/documents/${doc._id}`} className="block">
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/create" className="block p-2 hover:bg-gray-700">
        Create New Document
      </Link>
    </div>
  );
};

export default Sidebar;
