import {
  ADD_ITEM,
  REMOVE_ITEM,
  INPUT_CHANGE,
} from "../constants/types";

export const addItem = (index, payload) => {
  return {
    type: ADD_ITEM,
    index,
    payload,
  };
};

export const removeItem = (index, payload) => {
  return {
    type: REMOVE_ITEM,
    index,
    payload
  };
};

export const inputChanges = (item, payload, total) => {
  return {
    type: INPUT_CHANGE,
    item,
    payload,
    total
  };
};