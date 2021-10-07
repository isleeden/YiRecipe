import React, { useState } from "react";
import Input from "components/Input/Input";
import AuthModal from "components/AuthModal/AuthModal";
import { useDispatch } from "react-redux";
import { signUp } from "store/thunks/userThunks";

export default function SignUp({ isActive, onClose }) {
  const dispatch = useDispatch();
  const initUserDataState = { email: "", password: "" };
  const [userData, setUserData] = useState({ ...initUserDataState });

  const submitHandler = () => {
    setUserData({ ...initUserDataState });
    dispatch(signUp(userData));
  };

  const onEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  return (
    <AuthModal
      title="Registration"
      submitText="Sign Up"
      isActive={isActive}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <Input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={onEmailChange}
      />
      <Input type="text" placeholder="Personal Name" />
      <Input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={onPasswordChange}
      />
    </AuthModal>
  );
}
