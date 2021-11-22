import api from "./index";

export default class RecipeService {
  static async getAllRecipes(limit = 10, page = 1) {
    return await api.get("/recipes", { params: { limit, page } });
  }

  static async getRecipe(id) {
    return await api.get("/recipes/" + id);
  }

  static async createRecipe(recipe) {
    return await api.post("/recipes", recipe);
  }

  static async updateRecipe(id, recipe) {
    return await api.put("/recipes/" + id, recipe);
  }

  static async deleteRecipe(id) {
    return await api.delete("/recipes/" + id);
  }
}
