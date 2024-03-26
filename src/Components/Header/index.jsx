import React from "react";
import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import search from "../../assets/images/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../../Pages/Home";
import styles from "./Header.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo of the market place"
          className={styles.logoImg}
        />
      </Link>

      <div className={styles.searchSection}>
        <input type="text" placeholder="Search" />
        <img
          src={search}
          alt="magnifying glass icon"
          className={styles.searchIcon}
        />
      </div>

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
  );
}

export default Navbar;
