// api/documentApi.js
export const getDocuments = async () => {
  try {
    const response = await fetch("/api/documents");
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

// Save document API call
export const saveDocumentApi = async (document) => {
  try {
    const response = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
    });
    if (!response.ok) {
      throw new Error("Failed to save document");
    }
    return await response.json();
  } catch (error) {
    console.error("Error saving document:", error);
  }
};
