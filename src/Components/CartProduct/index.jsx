import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import styles from "./CartProduct.module.jsx";

export const CartProduct = ({ product, onCountChange }) => {
  const [price, setPrice] = useState(Math.min(product.price, product.discountedPrice));

  const isDiscounted = product.price > product.discountedPrice;
  const priceClassNames = isDiscounted ? `${styles.price} ${styles.strikethrough}` : styles.price;
  const discountClassNames = isDiscounted ? styles.discountedPrice : '';
  const percentage = isDiscounted ? `${(((product.price - product.discountedPrice) / product.price) * 100).toFixed(0)}%` : null;

  const handleCountChange = (newCount) => {
    const updatedPrice = Math.min(product.price, product.discountedPrice) * Math.max(newCount, 0);
    setPrice(updatedPrice);
    onCountChange(updatedPrice, Math.max(newCount, 0));
  };

  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.title} />
      </Link>
      <div>
        <h1>{product.title}</h1>
        <div>
          {!isDiscounted && `NOK ${price.toFixed(2)}`}
          <div className={priceClassNames}>
            {isDiscounted && `NOK ${price.toFixed(2)}`}
          </div>
          <div className={styles.discountPriceContainer}>
            {isDiscounted && (
              <div className={discountClassNames}>- {percentage}</div>
            )}
            {isDiscounted && `NOK ${price}`}
          </div>
        </div>
      </div>
    </div>
  );
};
