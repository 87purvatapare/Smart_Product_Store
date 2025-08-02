
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, 
  withCredentials: true, // optional (for cookies/auth)
});

export default instance;
