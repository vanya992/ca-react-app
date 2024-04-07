import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  // Price handler
  const isDiscounted = product.price > product.discountedPrice;
  const priceClassNames = isDiscounted
    ? `${styles.price} ${styles.strikethrough}`
    : styles.price;
  const discountClassNames = isDiscounted
    ? `${styles.discountedPrice}`
    : styles.discountedPrice;
  const percentage = isDiscounted
    ? `${(
        ((product.price - product.discountedPrice) / product.price) *
        100
      ).toFixed(0)}%`
    : null;

  return (
    <div className={styles.card}>
      <img
        src={product.image.url}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.priceContainer}>
          <div className={priceClassNames}>
            {isDiscounted ? `NOK ${product.price}` : ""}
          </div>
          <div>
            <div className={discountClassNames}>
              {isDiscounted
                ? `NOK ${product.discountedPrice}`
                : `NOK ${product.price}`}
            </div>
            {isDiscounted && (
              <div className={styles.discountPercentage}>- {percentage}</div>
            )}
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="cardButton">
          More
        </Link>
      </div>
    </div>
  );
};
