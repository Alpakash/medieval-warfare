import type { StateCreator } from "zustand";
import type { StoreState } from "../index";
import type { Item } from "@/types";

export interface BuySlice {
  buy: Item[];
  sellItems: (itemsInCart: Item) => void;
  addToCart: (itemsInCart: Item, inputValue?: number) => void;
}

export const createBuySlice: StateCreator<
  StoreState,
  [],
  [],
  BuySlice
> = (set) => ({
  buy: [],
  sellItems: (itemsInCart) =>
    set((state) => {
      const index = state.buy.findIndex((item) => item.id === itemsInCart.id);
      if (index === -1) return { buy: state.buy };
      return {
        buy: [...state.buy.slice(0, index), ...state.buy.slice(index + 1)],
      };
    }),
  addToCart: (itemsInCart, inputValue) =>
    set((state) => {
      const newBuy = [...state.buy];
      for (let i = 1; i < (inputValue ?? 1); i++) newBuy.push(itemsInCart);
      newBuy.push(itemsInCart);
      return { buy: newBuy };
    }),
});