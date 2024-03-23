import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Layout from "./Components/Layout";
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<div>Products</div>} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="cart" element={<div>Cart</div>} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
