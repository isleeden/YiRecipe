import React from "react";
import Button from "components/Button/Button";
import { logout } from "store/thunks/userThunks";
import { useDispatch } from "react-redux";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return <Button onClick={clickHandler}>Logout</Button>;
}
