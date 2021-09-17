import React from "react";
import NavbarList from "components/NavbarList/NavbarList";
import styles from "./Header.module.scss";
import SignIn from "components/SignIn/SignIn";
import SignUp from "components/SignUp/SignUp";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={["container", styles.container].join(" ")}>
        <NavbarList></NavbarList>
        <div className={styles.authBtns}>
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>
      </div>
    </header>
  );
}
