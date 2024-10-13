import React, { useState } from "react";
import axios from "axios";

const CreateDocument = ({ ownerId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/documents", {
        title,
        content,
        owner: ownerId,
      });

      setSuccess("Document created successfully!");
      setError("");
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Error creating document: " + err.message);
      setSuccess("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Create Document</h2>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <div className="mb-4">
        <label className="block mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full"
          rows="4"
          required
        />
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white p-2">
        Save Document
      </button>
    </div>
  );
};

export default CreateDocument;
