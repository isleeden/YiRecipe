import axios from "axios";
import AuthService from "./AuthService";

export const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((cfg) => {
  cfg.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return cfg;
});

api.interceptors.response.use(
  (cfg) => {
    return cfg;
  },
  async (err) => {
    try {
      if (err.response.status == 401 && err.config && !err.config.isRetry) {
        err.config.isRetry = true;
        const response = await AuthService.checkAuth();
        localStorage.setItem("token", response.data.accessToken);
        return api.request(err.config);
      }
    } catch {}
  }
);

export default api;
