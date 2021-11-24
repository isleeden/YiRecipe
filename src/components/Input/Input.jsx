import React from "react";
import styles from "./Input.module.scss";

export default function Input({
  className,
  onChange,
  value,
  type,
  name,
  placeholder,
  onBlur,
}) {
  return (
    <input
      className={[styles.input, className].join(" ")}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
}
