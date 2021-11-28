import React from "react";
import Button from "components/Button/Button";
import LabelWithError from "components/LabelWithError/LabelWithError";
import Textarea from "components/Textarea/Textarea";
import InputError from "components/InputError/InputError";

export default function ManyValues({
  label,
  btnText,
  className,
  onChange,
  onSubmit,
  name,
  value,
  values,
  valuesError,
  error,
  rows,
}) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <LabelWithError label={label} error={error}>
        <Textarea
          value={value}
          onChange={onChange}
          rows={rows}
          name={name}
        ></Textarea>
      </LabelWithError>
      <div>
        <ul>
          {values.map((item, index) => {
            return <li key={`${item}${index}`}>{item}</li>;
          })}
        </ul>
        <InputError error={valuesError} />
        <Button type="submit" onClick={onSubmit}>
          {btnText}
        </Button>
      </div>
    </form>
  );
}
