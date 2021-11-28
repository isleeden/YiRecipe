import React from "react";
import styles from "./Ingredients.module.scss";

export default function Ingredients({ ingredients }) {
  return (
    <div>
      <h2 className={styles.title}>Ingredients</h2>
      <ul className={styles.list}>
        {ingredients.map((item, index) => {
          return (
            <li key={`${item}${index}`}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
