import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import RecipeService from "api/RecipeService";
import Header from "components/Header/Header";
import RecipeAbout from "components/RecipeAbout/RecipeAbout";
import SidebarList from "components/SidebarList/SidebarList";
import Ingredients from "components/Ingredients/Ingredients";
import Directions from "components/Directions/Directions";
import RecipeImages from "components/RecipeImages/RecipeImages";
import "styles/pages/Recipe.scss";

export default function Recipe() {
  const imgs = [
    "/images/recipe/image1.jpg",
    "/images/recipe/image2.jpg",
    "/images/recipe/image3.jpg",
  ];

  const recipesSidebar = [
    {
      id: "0",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
    {
      id: "1",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
    {
      id: "2",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
  ];

  const [recipeState, setRecipeState] = useState({
    recipe: { title: "", body: "", ingredients: [], directions: [] },
    author: { id: "", name: "" },
  });

  const { id } = useParams();

  const fetchRecipe = async () => {
    const response = await RecipeService.getRecipe(id);
    setRecipeState(response.data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <Header />
      <main className="recipe__main main">
        <div className="container">
          <div className="main-content">
            <RecipeAbout
              title={recipeState.recipe.title}
              body={recipeState.recipe.body}
              author={recipeState.author}
            />
            <RecipeImages imgs={imgs} />
            <Ingredients ingredients={recipeState.recipe.ingredients} />
            <Directions directions={recipeState.recipe.directions} />
          </div>
          <aside className="sidebar">
            <SidebarList
              recipes={recipesSidebar}
              title="Random Recipes"
            ></SidebarList>
          </aside>
        </div>
      </main>
    </>
  );
}
