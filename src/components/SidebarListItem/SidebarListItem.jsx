import React from "react";
import styles from "./SidebarListItem.module.scss";

export default function SidebarListItem({ title, img, author }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
