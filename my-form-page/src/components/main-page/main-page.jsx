import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RocketTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "./main-page.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPageBlock}>
      <h1>Welcome!</h1>
      <h3>Click here to use alternative wiki search :</h3>
      <div>
        <Link to="/info">
          <Button type="dashed" icon={<RocketTwoTone />} danger>
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
