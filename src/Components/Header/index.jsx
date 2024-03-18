import React from "react";
import logo from "../../images/logo.png";

function Navbar() {
    return (
        <nav className="nav">
            <a href="/home"><img src={logo} alt="Logo of the market place" className="logoImg" /></a>
            <ul>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;