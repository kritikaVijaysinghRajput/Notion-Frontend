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

  const handleDocumentCreated = (newDocument) => {
    setDocuments((prevDocs) => [...prevDocs, newDocument]);
  };

  const handleDocumentSelect = (document) => {
    setCurrentDocument(document);
  };

  const handleDocumentUpdate = (updatedDocument) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc._id === updatedDocument._id ? updatedDocument : doc
      )
    );
    setCurrentDocument(null); // Clear current document after updating
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen`}
    >
      <Sidebar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        documents={documents}
        onDocumentSelect={handleDocumentSelect}
      />
      <div className="flex-grow p-8">
        {location.pathname === "/create" || currentDocument ? (
          <CreateDocument
            document={currentDocument}
            onDocumentCreated={handleDocumentCreated}
            onDocumentUpdate={handleDocumentUpdate} // Pass update handler
          />
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
            <DocumentList
              documents={documents}
              onDocumentSelect={setCurrentDocument}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
