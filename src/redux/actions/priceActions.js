import { INCREMENT_TOTAL, DECREMENT_TOTAL, CHANGE_TOTAL } from "../constants/types";

export const incrementTotal = (item) => {
  return {
    type: INCREMENT_TOTAL,
    item,
  };
};

export const decrementTotal = (item) => {
  return {
    type: DECREMENT_TOTAL,
    item,
  };
};

export const changeTotal = (item, changeCart) => {
  return {
    type: CHANGE_TOTAL,
    item,
    changeCart,
  };
};
