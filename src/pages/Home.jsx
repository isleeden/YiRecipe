import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import "styles/pages/Home.scss";
import RecipeList from "components/RecipeList/RecipeList";
import SidebarList from "components/SidebarList/SidebarList";
import RecipeService from "api/RecipeService";
import PagesList from "components/PagesList/PagesList";
import { createPages } from "utils/createPages";

export default function Home() {
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

  const [recipeState, setRecipeState] = useState([]);
  const [countRecipes, setCountRecipes] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const pagesCount = Math.ceil(countRecipes / limit);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  const fetchRecipes = async () => {
    const response = await RecipeService.getAllRecipes(limit, currentPage);
    setRecipeState(response.data.rows);
    setCountRecipes(response.data.count);
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]);

  const handlePageClick = (item) => {
    return () => {
      setCurrentPage(item);
    };
  };

  return (
    <>
      <Header />
      <main className="main home__main">
        <div className="container">
          <h1 className="home__title">Home Page</h1>
          <section className="last-added">
            <div className="main-content">
              <RecipeList recipes={recipeState} title="Last Added" />
              <div className="pages-wrapper">
                <PagesList
                  pages={pages}
                  onPageClick={handlePageClick}
                  currentPage={currentPage}
                ></PagesList>
              </div>
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
