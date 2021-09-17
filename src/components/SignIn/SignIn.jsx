import React from "react";
import Input from "components/Input/Input";
import AuthModal from "components/AuthModal.jsx/AuthModal";

export default function SignIn({ isActive, onClose }) {
  return (
    <AuthModal
      title="Login"
      submitText="Sign In"
      isActive={isActive}
      onClose={onClose}
    >
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </AuthModal>
  );
}
