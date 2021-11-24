import React from "react";

export default function InputError({ error }) {
  return <p className={error ? "active" : ""}>{error}</p>;
}
