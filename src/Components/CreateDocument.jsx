import React, { useState } from "react";

const CreateDocument = ({ document }) => {
  const [title, setTitle] = useState(document ? document.title : "");
  const [content, setContent] = useState(document ? document.content : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token or user ID from localStorage
    const token = localStorage.getItem("token"); // Adjust this if you store it differently

    try {
      const response = await fetch("http://localhost:5000/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create document");
      }

      const data = await response.json();
      console.log("Document created successfully:", data);
      // Optionally redirect or update the UI after successful creation
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-bold mb-4">Create Document</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Document
      </button>
    </form>
  );
};

export default CreateDocument;
