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

  addProduct: (productToAdd) => {
    const products = get().products.slice();
    const existingProductIndex = products.findIndex(
      (p) => p.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      products[existingProductIndex].count += 1;
    } else {
      products.push({ ...productToAdd, count: 1 });
    }

    saveProductsToLocalStorage(products);
    set({ products });
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
    const updatedProducts = get()
      .products.map((product) => {
        if (product.id === productId) {
          return { ...product, count };
        }
        return product;
      })
      .filter((product) => product.count > 0);
    saveProductsToLocalStorage(updatedProducts);
    set({ products: updatedProducts });
  },

  getProducts: () => get().products,
}));
