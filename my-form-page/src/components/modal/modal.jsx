import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import styles from "./modal.module.css";

const MyModal = ({ modalIsOpen, setIsOpen, resetFormValues }) => {
  const handleOk = () => {
    setIsOpen(false);
    resetFormValues();
  };

  return (
    <Modal
      className={styles.modal}
      visible={modalIsOpen}
      title="Almost everything is ready"
      centered
      footer={[
        <Link to="/main">
          <Button
            key={0}
            className={styles.modalButton}
            type="primary"
            onClick={handleOk}
          >
            OK
          </Button>
        </Link>,
      ]}
    >
      <div>Success!</div>
    </Modal>
  );
};

export default MyModal;
