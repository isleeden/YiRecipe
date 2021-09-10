import RecipeItem from "components/RecipeListItem/RecipeItem";
import React from "react";
import styles from "./RecipeList.module.scss";

export default function RecipeList({ recipes, title }) {
  return (
    <div>
      {title ? <h2 className={styles.title}>{title}</h2> : ""}
      <div className={styles.list}>
        {recipes.map((recipe) => {
          return <RecipeItem key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
