import type { StateCreator } from "zustand";
import type { StoreState } from "../index";
import type { TotalPriceState, Item } from "@/types";

export interface PriceSlice {
  totalPrice: TotalPriceState;
  incrementTotal: (item: Item) => void;
  decrementTotal: (item: Item) => void;
  changeTotal: (item: Item, changeCart: number) => void;
}

export const createPriceSlice: StateCreator<
  StoreState,
  [],
  [],
  PriceSlice
> = (set) => ({
  totalPrice: { amount: 0 },
  incrementTotal: (item) =>
    set((state) => ({
      totalPrice: { amount: state.totalPrice.amount + item.price },
    })),
  decrementTotal: (item) =>
    set((state) => ({
      totalPrice: { amount: state.totalPrice.amount - item.price },
    })),
  changeTotal: (item, changeCart) =>
    set(() => ({
      totalPrice: { amount: item.price * changeCart },
    })),
});