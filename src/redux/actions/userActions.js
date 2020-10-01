import { INCREMENT_MY_GOLD, DECREMENT_MY_GOLD, BOUGHT_ITEMS } from "../constants/types";

export const incrementGold = (item) => {
  return {
    type: INCREMENT_MY_GOLD,
    item,
  };
};

export const decrementGold = (item) => {
  return {
    type: DECREMENT_MY_GOLD,
    item,
  };
};

export const boughtItems = (bought) => {
  return {
    type: BOUGHT_ITEMS,
    bought,
  };
};
