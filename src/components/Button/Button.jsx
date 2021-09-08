import React from "react";
import styles from "./Button.module.scss";

export default function Button({ onClick, children, className }) {
  return (
    <div className={[styles.btn, className].join(" ")} onClick={onClick}>
      {children}
    </div>
  );
}
