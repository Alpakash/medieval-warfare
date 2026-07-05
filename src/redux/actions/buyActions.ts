import { SELL_ITEMS, ADD_TO_CART } from '../constants/types';

export const sellItems = (itemsInCart: any) => {
  return {
    type: SELL_ITEMS,
    itemsInCart,
  };
};

export const addToCart = (itemsInCart: any, inputValue?: number, _extra?: any) => {
  return {
    type: ADD_TO_CART,
    itemsInCart,
    inputValue
  };
};
