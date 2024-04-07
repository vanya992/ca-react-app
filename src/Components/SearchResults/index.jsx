import React from "react";
import styles from "./SearchResults.module.css";
import { Link } from "react-router-dom";

export const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div className={styles.noResults}>No product matches your search.</div>
    );
  }

  return (
    <div className={styles.results}>
      {results.map((result) => (
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
