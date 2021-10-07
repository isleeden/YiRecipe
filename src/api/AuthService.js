import api from "./index";

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
}
