import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useCartStore } from "../../store/cartStore";
import { FaBars, FaTimes, FaCartPlus } from "react-icons/fa";

function Navbar() {
  const products = useCartStore((state) => state.products);
  const itemCount = products.reduce(
    (total, product) => total + product.count,
    0
  );

  const [isNavVisible, setIsNavVisible] = useState(false);

  const navRef = useRef();

  const showNavbar = () => {
    setIsNavVisible((prevVisible) => !prevVisible);
    navRef.current.classList.toggle(styles.responsiveNav);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
  };

  return (
    <header>
      <Link to="/">
        <img
          src={logo}
          alt="Logo of the market place"
          className={styles.logoImg}
        />
      </Link>
      <nav
        className={`${styles.nav} ${isNavVisible ? styles.responsiveNav : ""}`}
        ref={navRef}
      >
        {" "}
        <button className={styles.close} onClick={showNavbar}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeMenu} className={styles.cart}>
              <FaCartPlus />
              {itemCount > 0 && (
                <span className={styles.cartCount}>{itemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.burger} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
