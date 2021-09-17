import React, { useRef, useState } from "react";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import CloseButton from "components/CloseButton/CloseButton";
import styles from "./AuthModal.module.scss";
import useExternalClickListener from "hooks/useExternalClickListener";

export default function AuthModal({ onSubmit, title, submitText, children }) {
  const [isModalActive, setIsModalActive] = useState(false);
  const modalRef = useRef();
  const authButton = useRef();

  const closeModal = () => {
    setIsModalActive(false);
  };

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  useExternalClickListener(modalRef, authButton, closeModal);

  const closeModalOnSubmit = (e) => {
    closeModal();
    onSubmit(e);
  };

  return (
    <div>
      <Button onClick={toggleModal} className={styles.authBtn} ref={authButton}>
        {submitText}
      </Button>
      <Modal isActive={isModalActive} ref={modalRef}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <CloseButton onClick={closeModal} />
        </div>
        <form className={styles.form} onSubmit={closeModalOnSubmit}>
          {children}
          <Button className={styles.submitButton}>{submitText}</Button>
        </form>
      </Modal>
    </div>
  );
}
