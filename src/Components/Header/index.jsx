import React from "react";
import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./Header.module.css";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link to="/">
          <img
            src={logo}
            alt="Logo of the market place"
            className={styles.logoImg}
          />
        </Link>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src={shoppingCart}
                alt="Logo of the market place"
                className={styles.shoppingCart}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="products" element={<div>Products</div>} />
        <Route path="contact" element={<div>Contact</div>} />
        <Route path="cart" element={<div>Cart</div>} />
        <Route path="*" element={<div>Route not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
