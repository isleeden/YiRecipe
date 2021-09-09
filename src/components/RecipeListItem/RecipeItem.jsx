import React from "react";
import styles from "./RecipeListItem.module.scss";

export default function RecipeListItem({ title, body, author, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" />
      </div>
      <div className={styles.textCard}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <a href="/" className={styles.author}>
          By <span>{author}</span>
        </a>
      </div>
    </div>
  );
}
