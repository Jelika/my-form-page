import React from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './modal.module.css';

const MyModal = ({modalIsOpen,setModalIsOpen}) => {
    const handleOk=()=>{
    setModalIsOpen(false);
    };

    return (
        <Modal
        className={styles.modal}
        visible={modalIsOpen}
        title="Almost everything is ready"
        centered
        footer={[
          <Button className={styles.modalButton} type="primary" onClick={handleOk}>
          OK
          </Button>,
        ]}
      > 
       <div>Success!</div>
      </Modal>
    );
}

export default MyModal;
