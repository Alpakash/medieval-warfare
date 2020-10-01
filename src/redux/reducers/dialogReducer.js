import { SHOW_DIALOG } from "../constants/types";

const initialState = {
  show: false
};

const dialogBox = (state = initialState, action) => {
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
