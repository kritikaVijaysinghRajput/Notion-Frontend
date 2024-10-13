import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import CreateDocument from "../Components/CreateDocument";
import { useLocation } from "react-router-dom";
import DocumentList from "../Components/DocumentList";
import { getDocuments } from "../api/documentApi";

function Dashboard({ toggleTheme, darkMode }) {
  const location = useLocation();
  const [documents, setDocuments] = useState([]);
  const [currentDocument, setCurrentDocument] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocuments();
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen`}
    >
      <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="flex-grow p-8">
        {location.pathname === "/create" || currentDocument ? (
          <CreateDocument document={currentDocument} />
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
            <DocumentList
              documents={documents}
              onDocumentSelect={setCurrentDocument} // Set the selected document for editing
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
