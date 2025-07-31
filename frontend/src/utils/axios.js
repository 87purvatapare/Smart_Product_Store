// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Change if needed
  withCredentials: true,
});

export default instance;
