import { BUY_ITEMS, ADD_TO_CART } from "../constants/types";

const buyItems = (state = [], action) => {
  switch (action.type) {
    case BUY_ITEMS:
      break;
    case ADD_TO_CART:
      break;
    default:
      return state;
  }
};

export default buyItems;
