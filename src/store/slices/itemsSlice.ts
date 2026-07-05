import type { StateCreator } from "zustand";
import type { StoreState } from "../index";
import type { Item } from "@/types";

export interface ItemsSlice {
  items: Item[];
  addItem: (index: number, payload: number) => void;
  removeItem: (index: number, payload: number) => void;
  inputChanges: (item: Item, payload: number) => void;
}

export const createItemsSlice: StateCreator<
  StoreState,
  [],
  [],
  ItemsSlice
> = (set) => ({
  items: [],
  addItem: (index, payload) =>
    set((state) => ({
      items: state.items.map((item, i) => {
        if (i === index && item.inCart >= 0 && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - payload,
            inCart: item.inCart + payload,
          };
        }
        return { ...item };
      }),
    })),
  removeItem: (index, payload) =>
    set((state) => ({
      items: state.items.map((item, i) => {
        if (i === index && item.inCart > 0) {
          return {
            ...item,
            quantity: item.quantity + payload,
            inCart: item.inCart - payload,
          };
        }
        return { ...item };
      }),
    })),
  inputChanges: (item, payload) =>
    set((state) => ({
      items: state.items.map((it, i) => {
        if (i === item.index) {
          return {
            ...it,
            quantity:
              it.inCart > payload
                ? it.quantity + it.inCart - payload
                : it.quantity - (payload - it.inCart),
            inCart: payload,
          };
        }
        return { ...it };
      }),
    })),
});