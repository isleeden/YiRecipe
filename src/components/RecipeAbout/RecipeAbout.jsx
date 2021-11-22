import React from "react";
import styles from "./RecipeAbout.module.scss";
import { Link } from "react-router-dom";

export default function RecipeAbout({ title, body, author }) {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{body}</p>
      <Link to={`/users/${author.id}`} className={styles.author}>
        by <span>{author.name}</span>
      </Link>
    </div>
  );
}
