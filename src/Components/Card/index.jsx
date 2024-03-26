import styles from "./Card.module.css";
import { useCartStore } from "../../store/cartStore";
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
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.priceContainer}>
          {!isDiscounted && `$ ${product.price}`}
          <div className={priceClassNames}>
            {isDiscounted && `$ ${product.price}`}
          </div>
          <div className={styles.discountPriceContainer}>
            {isDiscounted && (
              <div className={discountClassNames}>- {percentage}</div>
            )}
            {isDiscounted &&
              product.discountedPrice &&
              `$ ${product.discountedPrice}`}
          </div>
        </div>
        <button className={styles.readMore}>Read more</button>
      </div>
    </div>
  );
};
