import React from "react";
import styles from "./PagesList.module.scss";

export default function PagesList({ pages, onPageClick, currentPage }) {
  return (
    <ul className={styles.list}>
      {pages.map((item) => {
        return (
          <li
            key={item}
            onClick={onPageClick(item)}
            className={`${styles.listItem} ${
              currentPage === item ? styles.active : ""
            }`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
