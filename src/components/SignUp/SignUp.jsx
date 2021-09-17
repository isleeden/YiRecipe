import React from "react";
import Input from "components/Input/Input";
import AuthModal from "components/AuthModal.jsx/AuthModal";

export default function SignUp({ isActive, onClose }) {
  return (
    <AuthModal
      title="Registration"
      submitText="Sign Up"
      isActive={isActive}
      onClose={onClose}
    >
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Personal Name" />
      <Input type="password" placeholder="Password" />
    </AuthModal>
  );
}
