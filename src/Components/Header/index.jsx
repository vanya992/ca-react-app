import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import { SearchBar } from "../Search";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { SearchResults } from "../SearchResults";
import { useCartStore } from "../../store/cartStore";

function Navbar() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const products = useCartStore((state) => state.products);
  const itemCount = products.reduce(
    (total, product) => total + product.count,
    0
  );

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo of the market place"
          className={styles.logoImg}
        />
      </Link>
      <SearchBar setResults={setResults} input={input} setInput={setInput} />
      {results.length > 0 && <SearchResults results={results} />}
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
              alt="Shopping Cart"
              className={styles.shoppingCart}
            />
            {itemCount > 0 && (
              <span className={styles.cartCount}>{itemCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
