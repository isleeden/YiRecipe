import React from "react";
import Header from "components/Header/Header";
import RecipeAbout from "components/RecipeAbout/RecipeAbout";
import SidebarList from "components/SidebarList/SidebarList";
import Ingredients from "components/Ingredients/Ingredients";
import Directions from "components/Directions/Directions";
import RecipeImages from "components/RecipeImages/RecipeImages";
import "styles/pages/Recipe.scss";

export default function Recipe() {
  const title = "Chicken, Apple, and Brussels Sprout Sheet Pan Dinner";
  const body = `If you're looking for the easiest dinner imaginable (short of takeout), 
  sheet pan recipes are the perfect thing for you. This one, with chicken, apple, and 
  Brussels sprouts, is not only easy to cook, but even easier to clean! Serve it alone or with rice/salad.`;
  const author = "My Stir Crazy Kitchen";
  const imgs = [
    "/images/recipe/image1.jpg",
    "/images/recipe/image2.jpg",
    "/images/recipe/image3.jpg",
  ];
  const ingredients = [
    "2 cups Brussels sprouts, halved",
    "1 red apple, cut into 1-inch cubes",
    "1 (4 ounce) package pancetta",
    "2 tablespoons olive oil, divided",
    "1 teaspoon minced fresh rosemary",
    "6 skinless, boneless chicken thighs",
    "salt and ground black pepper to taste",
  ];
  const directions = [
    "Preheat the oven to 425 degrees F (220 degrees C).",
    "Toss Brussels sprouts, apple, and pancetta with 1 tablespoon olive oil and rosemary in a bowl. Spread into a single layer on a sheet pan.",
    "Leave space on the pan for the chicken thighs. Toss chicken with the remaining 1 tablespoon oil in the same bowl; place on the sheet pan. Sprinkle salt and pepper on top.",
    "Bake in the preheated oven, stirring the Brussels sprouts mixture every 15 minutes, until chicken is no longer pink in the center and the juices run clear, 40 to 45 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
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

  return (
    <>
      <Header />
      <main className="recipe__main main">
        <div className="container">
          <div className="main-content">
            <RecipeAbout title={title} body={body} author={author} />
            <RecipeImages imgs={imgs} />
            <Ingredients ingredients={ingredients} />
            <Directions directions={directions} />
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
