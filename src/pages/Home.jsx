import React from "react";
import Header from "components/Header/Header";
import "styles/pages/Home.scss";
import RecipeList from "components/RecipeList/RecipeList";

export default function Home() {
  const recipes = [
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
      <div className="home__main">
        <div className="container">
          <h1 className="home__title">Home Page</h1>
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </>
  );
}
