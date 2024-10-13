import axios from "axios";

const API_URL = "/api/documents";

export const createDocument = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const getDocuments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateDocument = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteDocument = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
