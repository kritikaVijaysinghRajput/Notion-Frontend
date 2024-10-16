import React, { useState } from "react";
import { Save } from "@mui/icons-material"; // Import the Save icon from MUI

const CreateDocument = ({ onDocumentCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("user-id");

      const response = await fetch(
        "https://notebook-backend-2wof.onrender.com/api/documents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "user-id": userId,
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create document");
      }

      const newDocument = await response.json();

      if (onDocumentCreated) {
        onDocumentCreated(newDocument);
      }

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-screen p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Title of your content"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block p-2 w-2/5 rounded-2xl border outline-none shadow-sm"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center ml-2 bg-gray-800 hover:bg-gray-950 text-white p-2 rounded-full"
        >
          <Save />
        </button>
      </div>

      <textarea
        placeholder="Start your writing from here...."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full flex-1 p-2 outline-none resize-none"
        style={{ border: "none" }}
        required
      />
    </form>
  );
};

export default CreateDocument;
