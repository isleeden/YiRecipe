import React from "react";
import styles from "./Textarea.module.scss";

export default function Textarea({ value, rows, onChange, name, onBlur }) {
  return (
    <textarea
      onChange={onChange}
      onBlur={onBlur}
      className={styles.textarea}
      rows={rows}
      name={name}
      value={value}
    ></textarea>
  );
}
