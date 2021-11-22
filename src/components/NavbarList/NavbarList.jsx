import React from "react";
import styles from "./NavbarList.module.scss";
import routes from "routes";
import NavbarListItem from "components/NavbarListItem/NavbarListItem";

export default function NavbarList() {
  return (
    <ul className={styles.list}>
      <NavbarListItem path="/">YiRecipe</NavbarListItem>
    </ul>
  );
}
