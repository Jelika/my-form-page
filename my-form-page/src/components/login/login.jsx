import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import "antd/dist/antd.css";
import styles from "./login.module.css";
import MyModal from "../modal/modal"

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, errors, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setModalIsOpen(true);
  };
  const setIsOpen = (isOpen) => setModalIsOpen(isOpen);
  const resetFormValues = () => reset({});

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={(e) => e.preventDefault()}>
          <span className={styles.label}>Email address</span>
          <input
            className={styles.inputForm}
            name="email"
            placeholder="Email address"
            ref={register({
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className={styles.errorMsg}>{errors.email.message}</p>
          )}
          <span className={styles.label}>Password</span>
          <input
            className={styles.inputForm}
            name="password"
            type="password"
            placeholder="Password"
            ref={register({
              required: "You must specify a password",
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
          <Button
            className={`${styles.btn} ${styles.btnFilled}`}
            shape="round"
            onClick={handleSubmit(onSubmit)}
            value="large"
          >
            Login
          </Button>
        </form>
      </div>
      <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} resetFormValues={resetFormValues}/>
    </>
  );
};

export default Login;
