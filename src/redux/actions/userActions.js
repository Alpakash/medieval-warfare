import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD,
  CHANGE_MY_GOLD,
  BOUGHT_ITEMS,
  GOLD_SPEND,
  CART_GOLD_TO_GOLD
} from "../constants/types";

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

export const changeGold = (item, changeCart, totalPrice) => {
  return {
    type: CHANGE_MY_GOLD,
    item,
    changeCart,
    totalPrice
  }
}

export const boughtItems = (bought) => {
  return {
    type: BOUGHT_ITEMS,
    bought,
  };
};

export const spendGold = (totalPrice) => {
  return {
    type: GOLD_SPEND,
    totalPrice,
  };
};

export const cartGoldEqualToCurrentGold = (items) => {
  return {
    type: CART_GOLD_TO_GOLD,
    items
  };
}

