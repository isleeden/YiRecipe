import Home from "pages/Home";
import Recipe from "pages/Recipe";
import CreateRecipe from "pages/CreateRecipe";

const routes = [
  { path: "/", component: Home, exact: true, name: "Home" },
  {
    path: "/recipes/create",
    component: CreateRecipe,
    exact: true,
    name: "Create",
  },
  { path: "/recipes/:id", component: Recipe, exact: true, name: "Recipe" },
];

export default routes;
