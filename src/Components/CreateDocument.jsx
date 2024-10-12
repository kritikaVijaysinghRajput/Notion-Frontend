// CreateDocument.jsx
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import IconButton from "@mui/material/IconButton";

function CreateDocument({ isDarkMode }) {
  const [documentContent, setDocumentContent] = useState("");

  const handleSave = () => {
    console.log("Document saved:", documentContent);
  };

  const handleChange = (event) => {
    setDocumentContent(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Image attached:", file.name);
    }
  };

  return (
    <div className="h-full  overflow-hidden p-4 relative">
      <div className="flex items-center mb-4">
        <textarea
          className="w-full h-3/4 border-none resize-none bg-transparent outline-none"
          placeholder="Type your document here..."
          value={documentContent}
          onChange={handleChange}
        />
      </div>

      <div className="absolute top-4 right-4 flex space-x-2">
        <label htmlFor="image-upload">
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <IconButton
            size="small"
            style={{
              color: isDarkMode ? "white" : "black",
            }}
            aria-label="attach image"
          >
            <AttachFileIcon fontSize="small" />
          </IconButton>
        </label>
        <IconButton
          size="small"
          style={{
            color: isDarkMode ? "white" : "black",
          }}
          onClick={handleSave}
          aria-label="save document"
        >
          <SaveIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default CreateDocument;
