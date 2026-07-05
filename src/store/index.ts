import { create } from "zustand";
import {
  ItemsSlice,
  createItemsSlice,
} from "./slices/itemsSlice";
import {
  UserSlice,
  createUserSlice,
} from "./slices/userSlice";
import {
  DialogSlice,
  createDialogSlice,
} from "./slices/dialogSlice";
import {
  PriceSlice,
  createPriceSlice,
} from "./slices/priceSlice";
import {
  BuySlice,
  createBuySlice,
} from "./slices/buySlice";

// Combined store type
export type StoreState = ItemsSlice &
  UserSlice &
  DialogSlice &
  PriceSlice &
  BuySlice;

// Combined store - merges all slices into one
export const useStore = create<StoreState>()((...a) => ({
  ...createItemsSlice(...a),
  ...createUserSlice(...a),
  ...createDialogSlice(...a),
  ...createPriceSlice(...a),
  ...createBuySlice(...a),
}));