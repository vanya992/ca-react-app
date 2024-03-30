import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Products, ContactForm, Product } from "./Pages/index";
import Layout from "./Components/Layout";
import "./style.css";

// <Route path="product/:id" element={<Product />} />
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />

          <Route path="contact" element={<ContactForm />} />
          <Route path="cart" element={<div>Cart</div>} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
