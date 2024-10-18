import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  setCart: (cart) => set({ cart }),

  createCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },
}));
