import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  Products,
  ContactForm,
  Product,
  Cart,
  Checkout,
} from "./Pages/index";
import Layout from "./Components/Layout";
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />

          <Route path="contact" element={<ContactForm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
