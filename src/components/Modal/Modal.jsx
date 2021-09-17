import React from "react";
import styles from "./Modal.module.scss";

const Modal = React.forwardRef(({ isActive, children }, ref) => {
  return (
    <div
      ref={ref}
      className={
        isActive ? [styles.active, styles.modal].join(" ") : styles.modal
      }
    >
      {children}
    </div>
  );
});

export default Modal;
