import React from "react";
import styles from "./NavbarListItem.module.scss";
import { Link } from "react-router-dom";

export default function NavbarListItem({ path, children }) {
  return (
    <li>
      <Link className={styles.listItem} to={path}>
        {children}
      </Link>
    </li>
  );
}
