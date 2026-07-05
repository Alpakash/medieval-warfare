import { StateCreator } from "zustand";
import { TotalPriceState, Item } from "../../types";
import { StoreState } from "../index";

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