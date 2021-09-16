import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ isActive, children }) {
  return (
    <div
      className={
        isActive ? [styles.active, styles.modal].join(" ") : styles.modal
      }
    >
      {children}
    </div>
  );
}
