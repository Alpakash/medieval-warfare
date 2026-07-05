import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD,
  CHANGE_MY_GOLD,
  BOUGHT_ITEMS,
  GOLD_SPEND,
  CART_GOLD_TO_GOLD
} from "../constants/types";

export const incrementGold = (item: any) => {
  return {
    type: INCREMENT_MY_GOLD,
    item,
  };
};

export const decrementGold = (item: any) => {
  return {
    type: DECREMENT_MY_GOLD,
    item,
  };
};

export const changeGold = (item: any, changeCart: number, totalPrice: any) => {
  return {
    type: CHANGE_MY_GOLD,
    item,
    changeCart,
    totalPrice
  }
}

export const boughtItems = (bought?: any) => {
  return {
    type: BOUGHT_ITEMS,
    bought,
  };
};

export const spendGold = (totalPrice: any) => {
  return {
    type: GOLD_SPEND,
    totalPrice,
  };
};

export const cartGoldEqualToCurrentGold = (items?: any) => {
  return {
    type: CART_GOLD_TO_GOLD,
    items
  };
}
