import { INCREMENT_TOTAL, DECREMENT_TOTAL, CHANGE_TOTAL } from "../constants/types";

export const incrementTotal = (item: any) => {
  return {
    type: INCREMENT_TOTAL,
    item,
  };
};

export const decrementTotal = (item: any) => {
  return {
    type: DECREMENT_TOTAL,
    item,
  };
};

export const changeTotal = (item: any, changeCart: number) => {
  return {
    type: CHANGE_TOTAL,
    item,
    changeCart,
  };
};
