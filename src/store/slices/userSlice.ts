import type { StateCreator } from "zustand";
import type { StoreState } from "../index";
import type { UserState, Item, TotalPriceState } from "@/types";

export interface UserSlice {
  user: UserState;
  incrementGold: (item: Item) => void;
  decrementGold: (item: Item) => void;
  changeGold: (
    item: Item,
    changeCart: number,
    totalPrice: TotalPriceState
  ) => void;
  boughtItems: () => void;
  spendGold: (totalPrice: TotalPriceState) => void;
  cartGoldEqualToCurrentGold: () => void;
}

const initialUser: UserState = {
  id: 1,
  name: "Akash",
  login: "user1@example.com",
  balance: 1200,
  cartBalance: 1200,
  bought: false,
};

export const createUserSlice: StateCreator<
  StoreState,
  [],
  [],
  UserSlice
> = (set) => ({
  user: initialUser,
  incrementGold: (item) =>
    set((state) => ({
      user: { ...state.user, cartBalance: state.user.cartBalance + item.price },
    })),
  decrementGold: (item) =>
    set((state) => ({
      user: { ...state.user, cartBalance: state.user.cartBalance - item.price },
    })),
  changeGold: (item, changeCart, totalPrice) =>
    set((state) => {
      const newTotalPrice = item.price * (item.inCart - changeCart);
      return {
        user: {
          ...state.user,
          cartBalance:
            newTotalPrice <= totalPrice.amount
              ? changeCart === 0
                ? state.user.cartBalance + item.inCart * item.price
                : state.user.cartBalance + newTotalPrice
              : state.user.cartBalance +
                (item.inCart - changeCart) * item.price,
        },
      };
    }),
  boughtItems: () =>
    set((state) => ({
      user: { ...state.user, bought: true },
    })),
  spendGold: () =>
    set((state) => ({
      user: { ...state.user, balance: state.user.cartBalance },
    })),
  cartGoldEqualToCurrentGold: () =>
    set((state) => ({
      user: { ...state.user },
    })),
});