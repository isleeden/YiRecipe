import React, { useState } from "react";
import Input from "components/Input/Input";
import AuthModal from "components/AuthModal/AuthModal";
import { useDispatch } from "react-redux";
import { signIn } from "store/thunks/userThunks";

export default function SignIn({ isActive, onClose }) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const submitHandler = () => {
    console.log(userData);
    dispatch(signIn(userData));
  };

  const onEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  return (
    <AuthModal
      title="Login"
      submitText="Sign In"
      isActive={isActive}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <Input
        type="email"
        placeholder="Email"
        onChange={onEmailChange}
        value={userData.email}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
        value={userData.password}
      />
    </AuthModal>
  );
}
