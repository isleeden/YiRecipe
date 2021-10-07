import axios from "axios";
import api, { API_URL } from "./index";

export default class AuthService {
  static async signIn({ email, password }) {
    return await api.post("/auth/signin", { email, password });
  }

  static async signUp({ email, password }) {
    return await api.post("/auth/signup", { email, password });
  }

  static async logout() {
    return await api.post("/auth/logout");
  }

  static async checkAuth() {
    return await axios.get(API_URL + "/auth/refresh", {
      withCredentials: true,
    });
  }
}
