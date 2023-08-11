import axios from "axios";

const axiosService = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});

export default axiosService;
