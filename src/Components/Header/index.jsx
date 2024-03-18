import React from "react";
import logo from "../../images/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo of the market place" className="logoImg" />
        </Link>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
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
