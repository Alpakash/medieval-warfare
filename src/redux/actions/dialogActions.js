import { SHOW_DIALOG } from "../constants/types";

export const showDialog = (payload) => {
  return {
    type: SHOW_DIALOG,
    payload
  };
};
