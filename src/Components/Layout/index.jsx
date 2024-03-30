import React, { useState } from "react";
import Navbar from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  const [results, setResults] = useState([]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
