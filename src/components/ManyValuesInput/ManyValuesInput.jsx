import React, { useState } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

export default function ManyValuesInput({
  label,
  btnText,
  callback,
  className,
  valuesState,
}) {
  const [inputState, setInputState] = useState("");
  const onInputChange = (e) => {
    setInputState(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    callback(inputState);
    setInputState("");
  };

  return (
    <form className={`${className} `}>
      <label>
        <span>{label}</span>
        <Input value={inputState} onChange={onInputChange}></Input>
        <ul>
          {valuesState.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
        <div>
          <Button onClick={onClick}>{btnText}</Button>
        </div>
      </label>
    </form>
  );
}
