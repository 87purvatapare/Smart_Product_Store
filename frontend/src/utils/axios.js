
import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-stack-project-l99d.onrender.com/api", 
  withCredentials: true, // optional (for cookies/auth)
});

export default instance;
