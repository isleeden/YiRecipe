import React from "react";
import styles from "./Input.module.scss";

export default function Input({
  className,
  onChange,
  value,
  type,
  placeholder,
}) {
  return (
    <input
      className={[styles.input, className].join(" ")}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
