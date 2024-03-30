import React from "react";
import styles from "./SearchResults.module.css";
import { Link } from "react-router-dom";

export const SearchResults = ({ results }) => {
  return (
    <div className={styles.results}>
      {results.map((result, id) => (
        <Link
          key={result.id}
          to={`/product/${result.id}`}
          className={styles.resultItem}
        >
          {result.title}
        </Link>
      ))}
    </div>
  );
};
