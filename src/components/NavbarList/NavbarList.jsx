import React from "react";
import styles from "./NavbarList.module.scss";
import routes from "routes";
import NavbarListItem from "components/NavbarListItem/NavbarListItem";

export default function NavbarList() {
  return (
    <ul className={styles.list}>
      {routes.map((route) => {
        return (
          <NavbarListItem key={route.path} path={route.path}>
            {route.name}
          </NavbarListItem>
        );
      })}
    </ul>
  );
}
