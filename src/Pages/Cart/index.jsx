import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { useCartStore } from "../../store/cartStore";
import { CartProduct } from "../../Components/CartProduct";
import { AlertNotification } from "../../Components/AlertNotification";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const products = useCartStore((state) => state.products);
  const clearProducts = useCartStore((state) => state.clearProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const isCartEmpty = products.length === 0;

  useEffect(() => {
    calculateTotalPrice();
  }, [products]);

  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      const price = Math.min(product.price, product.discountedPrice);
      total += price * (product.count || 1);
    });
    setTotalPrice(total);
  };

  const handleCountChange = (updatedPrice, newCount, productId) => {
    useCartStore.getState().updateProductCount(productId, newCount);
    calculateTotalPrice();
  };

  const [showLabel, setShowLabel] = useState(false);

  const handleUnmount = () => {
    setShowLabel(false);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (products.length === 0) {
      setShowLabel(true);
    } else {
      clearProducts();
      navigate("/checkout");
    }
  };

  return (
    <main>
      <Helmet>
        <title>Cart | Market.</title>
      </Helmet>
      {showLabel && (
        <AlertNotification
          message={"You have no items in your cart."}
          onUnmount={handleUnmount}
        />
      )}
      <section>
        <h1>Cart</h1>
        {products.length === 0 ? (
          <>
            <p>Your cart is empty. Go back and find something you like.</p>
            <Link to="/products" className="ctaButton">
              Back to shopping
            </Link>
          </>
        ) : (
          products.map((product) => (
            <CartProduct
              product={product}
              key={product.id}
              onCountChange={(updatedPrice, newCount) =>
                handleCountChange(updatedPrice, newCount, product.id)
              }
            />
          ))
        )}
        <div className={styles.totalAndCheckout}>
          {!isCartEmpty && (
            <>
              <div>NOK {totalPrice.toFixed(2)}</div>
              <Link
                to="/checkout"
                onClick={handleCheckout}
                className="ctaButton"
              >
                Checkout
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
};
