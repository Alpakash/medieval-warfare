import { StateCreator } from "zustand";
import battleAxe from "../../assets/images/items/battle_axe.png";
import woodenShield from "../../assets/images/items/wooden_shield.png";
import bronzeSword from "../../assets/images/items/bronze_sword.png";
import longsword from "../../assets/images/items/longsword.png";
import { Item } from "../../types";
import { StoreState } from "../index";

export interface ItemsSlice {
  items: Item[];
  addItem: (index: number, payload: number) => void;
  removeItem: (index: number, payload: number) => void;
  inputChanges: (item: Item, payload: number, total?: any) => void;
}

export const initialItems: Item[] = [
  {
    index: 0,
    id: 101,
    name: "Battle axe",
    price: 120,
    quantity: 20,
    image: "battle_axe.png",
    imageUrl: battleAxe,
    inCart: 0,
  },
  {
    index: 1,
    id: 7,
    name: "Wooden shield",
    price: 150,
    quantity: 50,
    image: "wooden_shield.png",
    imageUrl: woodenShield,
    inCart: 0,
  },
  {
    index: 2,
    id: 2,
    name: "Bronze sword",
    price: 110,
    quantity: 100,
    image: "bronze_sword.png",
    imageUrl: bronzeSword,
    inCart: 0,
  },
  {
    index: 3,
    id: 3,
    name: "Longsword",
    price: 310,
    quantity: 10,
    image: "longsword.png",
    imageUrl: longsword,
    inCart: 0,
  },
];

export const createItemsSlice: StateCreator<
  StoreState,
  [],
  [],
  ItemsSlice
> = (set) => ({
  items: initialItems,
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