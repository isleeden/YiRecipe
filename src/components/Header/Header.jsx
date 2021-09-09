import React from "react";
import NavbarList from "components/NavbarList/NavbarList";
import Button from "components/Button/Button";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={["container", styles.container].join(" ")}>
        <NavbarList></NavbarList>
        <div className={styles.authBtns}>
          <Button className={styles.btn}>Sign in</Button>
          <Button className={styles.btn}>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
