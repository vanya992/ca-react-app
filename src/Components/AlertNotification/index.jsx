import { useEffect } from "react";
import styles from "./AlertNotification.module.css";

export const AlertNotification = ({ message, onUnmount }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onUnmount) {
        onUnmount();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [onUnmount]);

  return (
    <div className="alert">
      <div className={styles.alert}>
        <p className={styles.labelText}>{message}</p>
      </div>
    </div>
  );
};
