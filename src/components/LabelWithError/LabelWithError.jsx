import React from "react";
import InputError from "components/InputError/InputError";

export default function LabelWithError({ children, error, label }) {
  return (
    <label>
      <span>{label}</span>
      <InputError error={error} />
      {children}
    </label>
  );
}
