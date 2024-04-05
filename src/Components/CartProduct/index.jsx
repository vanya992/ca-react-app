import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartProduct.module.css";
import { AmountHandler } from "../AmountHandler";

export const CartProduct = ({ product, onCountChange }) => {
  const [price, setPrice] = useState(
    Math.min(product.price, product.discountedPrice)
  );

  const isDiscounted = product.price > product.discountedPrice;
  const priceClassNames = isDiscounted
    ? `${styles.price} ${styles.strikethrough}`
    : styles.price;
  const discountClassNames = isDiscounted ? styles.discountedPrice : "";
  const percentage = isDiscounted
    ? `${(
        ((product.price - product.discountedPrice) / product.price) *
        100
      ).toFixed(0)}%`
    : null;

  const handleCountChange = (newCount) => {
    const updatedPrice =
      Math.min(product.price, product.discountedPrice) * Math.max(newCount, 0);
    setPrice(updatedPrice);
    onCountChange(updatedPrice, Math.max(newCount, 0), product.id);
  };

  return (
    <div className={styles.cartProduct}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.title}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productDetails}>
        <div className={styles.productPricing}>
          <h3>{product.title}</h3>
          {isDiscounted && (
            <div className={`${styles.price} ${styles.strikethrough}`}>
              NOK {product.price.toFixed(2)}
            </div>
          )}
          <div className={discountClassNames}>NOK {price.toFixed(2)}</div>
          {isDiscounted && <div>- {percentage} off</div>}
          <AmountHandler
            plusCount={1}
            minusCount={1}
            onCountChange={handleCountChange}
            cartItem={product}
          />
        </div>
      </div>
    </div>
  );
};
