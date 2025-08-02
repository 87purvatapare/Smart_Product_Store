
import axios from "axios";

const axios = Axios.create({
  baseURL: "https://mern-stack-project-l99d.onrender.com/api",
  withCredentials: true,
});

export default instance;
