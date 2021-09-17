import React from "react";
import styles from "./Button.module.scss";

const Button = React.forwardRef(({ onClick, children, className }, ref) => {
  return (
    <button
      ref={ref}
      className={[styles.btn, className].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default Button;
