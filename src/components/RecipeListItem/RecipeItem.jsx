import React from "react";
import styles from "./RecipeListItem.module.scss";
import { Link } from "react-router-dom";

export default function RecipeListItem({ id, title, body, author, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="recipeimg" />
      </div>
      <div className={styles.textCard}>
        <h3>
          <Link className={styles.title} to={`recipes/${id}`}>
            {title}
          </Link>
        </h3>
        <p className={styles.body}>{body}</p>
        <Link to={`/users/${author.id}`} className={styles.author}>
          By <span>{author.name}</span>
        </Link>
      </div>
    </div>
  );
}
