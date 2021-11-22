import React from "react";
import styles from "./NewRecipeButton.module.scss";
import { Link } from "react-router-dom";

export default function NewRecipeButton({ to }) {
  return (
    <Link to={to} className={styles.button}>
      Add Your Recipe
    </Link>
  );
}
