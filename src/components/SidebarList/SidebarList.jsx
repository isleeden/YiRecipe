import React from "react";
import SidebarListItem from "components/SidebarListItem/SidebarListItem";
import styles from "./SidebarList.module.scss";

export default function SidebarList({ recipes, title }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {recipes.map((recipe) => {
          return <SidebarListItem key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
