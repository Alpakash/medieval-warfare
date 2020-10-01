import { INCREMENT_TOTAL, DECREMENT_TOTAL } from "../constants/types";

export const incrementTotal = (item) => {
  return {
    type: INCREMENT_TOTAL,
    item
  };
};

export const decrementTotal = (item) => {
  return {
    type: DECREMENT_TOTAL,
    item
  };
};
