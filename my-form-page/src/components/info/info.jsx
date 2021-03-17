import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import styles from "./info.module.css";

const NasaInfo = () => {
  const apiKey = "I50BLdzLh1kcpLjm1LSS1O9MYV1loIoM35FhEDEH";
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          //   const itemsMap = result.photos.map((item) => (
          //     <div className={styles.infoPageBlock}>
          //       <img className={styles.roverImg} src={item.img_src} />
          //     </div>
          //   ));

          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className={styles.spinner}>
          <Spin />
        </div>
      ) : (
        <div className={styles.infoPageBlock}>
          <img className={styles.roverImg} src={items.photos[0].img_src} />
          <h2> Name: {items.photos[0].rover.name}</h2>
          <h3> Camera: {items.photos[0].camera.full_name}</h3>
          <p>Launch date: {items.photos[0].rover.launch_date}</p>
        </div>
      )}
    </>
  );
};

export default NasaInfo;
