import api from "./index";

export default class RecipeService {
  static async getAllRecipes() {
    return await api.get("/recipe");
  }

  static async getRecipe(id) {
    return await api.get("/recipe/" + id);
  }

  static async createRecipe(recipe) {
    return await api.post("/recipe", { ...recipe });
  }

  static async updateRecipe(id) {
    return await api.put("/recipe/" + id), { ...recipe };
  }

  static async deleteRecipe(id) {
    return await api.delete("/recipe/" + id);
  }
}
