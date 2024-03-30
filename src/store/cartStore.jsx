import { create } from "zustand";

const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : [];
};

export const useCartStore = create((set, get) => ({
  products: loadProductsFromLocalStorage(),

  addProduct: (product) => {
    const products = get().products;
    const productIndex = products.findIndex((p) => p.id === product.id);

    let updatedProducts;

    if (productIndex !== -1) {
      const updatedProduct = {
        ...products[productIndex],
        count: products[productIndex].count + 1,
      };
      updatedProducts = [...products];
      updatedProducts[productIndex] = updatedProduct;
    } else {
      updatedProducts = [...products, { ...product, count: 1 }];
    }
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },

  deleteProduct: (productId) => {
    const updatedProducts = get().products.filter(
      (product) => product.id !== productId
    );
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },

  clearProducts: () => {
    localStorage.removeItem("products");
    set({ products: [] });
  },

  updateProductCount: (productId, count) => {
    const updatedProducts = get().products.map((product) => {
      if (product.id === productId) {
        return { ...product, count };
      }
      return product;
    });
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },

  getProducts: () => get().products,
}));
