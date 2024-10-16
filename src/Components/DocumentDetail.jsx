// DocumentDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";

const DocumentDetail = () => {
  const { id } = useParams();
  const [document, setDocument] = useState(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(
          `https://notebook-backend-2wof.onrender.com/api/documents/${id}`
        );
        const data = await response.json();
        setDocument(data);
        setContent(data.content);
        setTitle(data.title);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
    fetchDocument();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/documents/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update document");
      }

      navigate("/"); // Redirect back to dashboard after updating
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  if (!document) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border-b border-gray-300 mb-2 outline-none"
      />
      <textarea
        className="w-full h-3/4 border-none resize-none bg-transparent outline-none"
        placeholder="Type your document here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="absolute top-4 right-4 flex space-x-2">
        <IconButton
          size="small"
          onClick={handleUpdate}
          aria-label="save document"
        >
          <SaveIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default DocumentDetail;
