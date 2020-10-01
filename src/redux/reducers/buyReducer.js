import { SELL_ITEMS, ADD_TO_CART } from "../constants/types";
  
const buy = (state = [], action) => {
  switch (action.type) {
    case SELL_ITEMS:
      const index = state.findIndex(
        (item) => item.id === action.itemsInCart.id
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case ADD_TO_CART:
      return [...state, action.itemsInCart];
    default:
      return state;
  }
};

export default buy;
