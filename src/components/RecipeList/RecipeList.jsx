import RecipeItem from "components/RecipeListItem/RecipeItem";
import React from "react";
import styles from "./RecipeList.module.scss";

export default function RecipeList({ recipes }) {
  return (
    <div className={styles.list}>
      {recipes.map((recipe) => {
        return <RecipeItem key={recipe.id} {...recipe} />;
      })}
    </div>
  );
}
