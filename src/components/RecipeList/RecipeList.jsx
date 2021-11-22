import RecipeItem from "components/RecipeListItem/RecipeItem";
import React from "react";
import styles from "./RecipeList.module.scss";

export default function RecipeList({ recipes, title }) {
  return (
    <div>
      {title ? <h2 className={styles.title}>{title}</h2> : ""}
      <div className={styles.list}>
        {recipes.map((recipe) => {
          return (
            <RecipeItem
              id={recipe.id}
              key={recipe.id}
              title={recipe.title}
              body={recipe.body}
              author={recipe.User}
              img={recipe.img}
            />
          );
        })}
      </div>
    </div>
  );
}
