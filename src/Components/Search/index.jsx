import React, { useState } from "react";
import styles from "./Search.module.css";
import search from "../../assets/images/search.png";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const url = "https://v2.api.noroff.dev/online-shop";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = Array.isArray(json.data)
          ? json.data.filter((dataItem) => {
              return (
                dataItem &&
                dataItem.title &&
                dataItem.title.toLowerCase().includes(value.toLowerCase())
              );
            })
          : [];

        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!input) {
        setResults([]);
      }
    }, 100);
  };

  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        onFocus={() => input && fetchData(input)}
      />
      <img
        src={search}
        alt="magnifying glass icon"
        className={styles.searchIcon}
      />
    </div>
  );
};
