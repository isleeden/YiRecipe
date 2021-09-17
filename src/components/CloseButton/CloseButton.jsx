import React from "react";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import styles from "./CloseButton.module.scss";

export default function CloseButton({ onClick }) {
  return (
    <div onClick={onClick} className={styles.btn}>
      <CloseIcon className={styles.close}></CloseIcon>
    </div>
  );
}
