import React from "react";
import styles from "./Directions.module.scss";

export default function Directions({ directions }) {
  return (
    <div>
      <h2 className={styles.title}>Directions</h2>
      <ol className={styles.list}>
        {directions.map((item, index) => {
          return (
            <li>
              <p className={styles.step}>Step {index + 1}.</p>
              <p className={styles.listText}>{item}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
