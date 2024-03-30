import styles from "./Review.module.css";

export const Review = ({ data }) => {
  return (
    <div>
      <div>
        <p className={styles.rating}>{data.rating}</p>
        <h4>{data.username}</h4>
      </div>
      <p>{data.description}</p>
    </div>
  );
};
