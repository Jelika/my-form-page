import React, { useState, useCallback } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Spin } from "antd";
import styles from "./info.module.css";

const WikiInfo = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const searchHandling = (e) => {
    e.preventDefault();
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${searchValue}`;
    setIsLoaded(false);
    getContents(apiUrl);
  };

  const getContents = (url) => {
    const sourceUrl = url;
    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrlContest = corsUrl + sourceUrl;
    getApi(apiUrlContest);
  };

  const getApi = useCallback(
    (url) => {
      fetch(url)
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(function (data) {
          setError(null);
          console.log(data.parse.text["*"]);
          setItems(data.parse.text["*"]);
          setIsLoaded(true);
        })
        .catch(function (err) {
          setError('There has been a problem with your fetch operation');
          setIsLoaded(true);
          console.log(
            `There has been a problem with your fetch operation: ${err.message}`
          );
        });
      resetInputField();
    },
    [isLoaded]
  );

  return (
    <>
      {!isLoaded && (
        <div className={styles.spinner}>
          <Spin />
        </div>
      )}
      <div className={styles.container}>
        <header>WIKI SEARCH</header>
        <form onSubmit={searchHandling}>
          <input
            className={styles.inputForm}
            value={searchValue}
            onChange={handleSearchInputChanges}
            placeholder="search..."
            type="text"
          />
          <Button
            className={`${styles.btn} ${styles.btnFilled}`}
            shape="round"
            onClick={searchHandling}
          >
            search
          </Button>
        </form>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: items }} />
        )}
      </div>
    </>
  );
};

export default WikiInfo;
