import {
  ADD_ITEM,
  REMOVE_ITEM,
  INPUT_CHANGE,
} from "../constants/types";

export const addItem = (index: number, payload: number) => {
  return {
    type: ADD_ITEM,
    index,
    payload,
  };
};

export const removeItem = (index: number, payload: number) => {
  return {
    type: REMOVE_ITEM,
    index,
    payload
  };
};

export const inputChanges = (item: any, payload: number, total?: any) => {
  return {
    type: INPUT_CHANGE,
    item,
    payload,
    total
  };
};
