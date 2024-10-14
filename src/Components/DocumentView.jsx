import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DocumentView = () => {
  const { id } = useParams(); // Get document ID from URL
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const userId = localStorage.getItem("user-id");

        const response = await fetch(
          `http://localhost:5000/api/documents/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "user-id": userId,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch document");
        }

        const data = await response.json();
        setDocument(data);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [id]);

  if (!document) {
    return <p>Loading document...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{document.title}</h1>
      <p>{document.content}</p>
    </div>
  );
};

export default DocumentView;
