import React, { useEffect, useState } from "react";
import axios from "axios";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get("/api/documents");
      // Ensure the response is an array
      if (Array.isArray(response.data)) {
        setDocuments(response.data);
      } else {
        console.error("Expected an array but received:", response.data);
        setDocuments([]);
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
      setDocuments([]); // Handle errors appropriately
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            <h3>{document.title}</h3>
            <p>{document.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
