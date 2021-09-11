import Home from "pages/Home";
import Recipe from "pages/Recipe";

const routes = [
  { path: "/", component: Home, exact: true, name: "Home" },
  { path: "/recipe", component: Recipe, exact: true, name: "Recipe" },
];

export default routes;
