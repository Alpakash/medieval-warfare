import { SHOW_DIALOG } from "../constants/types";
import { DialogBoxState } from "../../types";

const initialState: DialogBoxState = {
  show: false
};

const dialogBox = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_DIALOG:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
};

export default dialogBox;
