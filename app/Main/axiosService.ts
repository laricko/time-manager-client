import axios from "axios";

// axios.defaults.withCredentials = true;

const axiosService = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});

export default axiosService;
