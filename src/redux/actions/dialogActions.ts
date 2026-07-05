import { SHOW_DIALOG } from "../constants/types";

export const showDialog = (payload: boolean) => {
  return {
    type: SHOW_DIALOG,
    payload
  };
};
