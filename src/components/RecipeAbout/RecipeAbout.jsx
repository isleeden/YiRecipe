import React from "react";
import styles from "./RecipeAbout.module.scss";

export default function RecipeAbout({ title, body, author }) {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{body}</p>
      <a href="/" className={styles.author}>
        by <span>{author}</span>
      </a>
    </div>
  );
}
