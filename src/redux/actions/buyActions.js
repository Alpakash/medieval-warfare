import { SELL_ITEMS, ADD_TO_CART } from '../constants/types';

export const sellItems = (itemsInCart) => {
  return {
    type: SELL_ITEMS,
    itemsInCart,
  };
};

export const addToCart = (itemsInCart) => {
  return {
    type: ADD_TO_CART,
    itemsInCart,
  };
};
