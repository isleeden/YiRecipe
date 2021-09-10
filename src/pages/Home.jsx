import React from "react";
import Header from "components/Header/Header";
import "styles/pages/Home.scss";
import RecipeList from "components/RecipeList/RecipeList";
import SidebarList from "components/SidebarList/SidebarList";

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
    {
      id: "3",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
    {
      id: "4",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
    {
      id: "5",
      title: "Spicy Grilled Cheese Sandwich",
      body: "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
      author: "PATELGURL",
      img: "/images/recipe_1.jpg",
    },
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
      <main className="home__main">
        <div className="container">
          <h1 className="home__title">Home Page</h1>
          <section className="last-added">
            <div className="main-content">
              <RecipeList recipes={recipes} title="Last Added" />
            </div>
            <aside className="sidebar">
              <SidebarList
                recipes={recipesSidebar}
                title="Random Recipes"
              ></SidebarList>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}
