import React from "react";
import NavbarList from "components/NavbarList/NavbarList";
import styles from "./Header.module.scss";
import SignIn from "components/SignIn/SignIn";
import SignUp from "components/SignUp/SignUp";
import { useSelector } from "react-redux";
import LogoutButton from "components/LogoutButton/LogoutButton";
import NewRecipeButton from "components/NewRecipeButton/NewRecipeButton";

export default function Header() {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <header className={styles.header}>
      <div className={["container", styles.container].join(" ")}>
        <NavbarList></NavbarList>
        <div className={styles.authBtns}>
          {isAuth ? (
            <>
              <NewRecipeButton to="/recipes/create" />
              <LogoutButton />
            </>
          ) : (
            <>
              <SignIn></SignIn>
              <SignUp></SignUp>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
