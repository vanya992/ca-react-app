import styles from "./AmountHandler.module.css";
import { useState } from "react";

export const AmountHandler = ({
  plusCount = 1,
  minusCount = 1,
  onCountChange,
  cartItem,
}) => {
  const [count, setCount] = useState(cartItem.count);

  const handlePlus = () => {
    const newCount = count + plusCount;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleMinus = () => {
    if (count > 0) {
      const newCount = count - minusCount;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className={styles.counter}>
      <button
        className={`${styles.button} ${styles.buttonMinus}`}
        onClick={handleMinus}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={`${styles.button} ${styles.buttonPlus}`}
        onClick={handlePlus}
      >
        +
      </button>
    </div>
  );
};
