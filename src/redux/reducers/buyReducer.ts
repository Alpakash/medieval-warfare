import { SELL_ITEMS, ADD_TO_CART } from "../constants/types";
import { Item } from "../../types";
  
const buy = (state: Item[] = [], action: any) => {
  switch (action.type) {
    case SELL_ITEMS:
      const index = state.findIndex(
        (item) => item.id === action.itemsInCart.id
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case ADD_TO_CART:
      for (let i = 1; i < action.inputValue; i++) state.push(action.itemsInCart);

      return [
        ...state,
        action.itemsInCart,
      ];
    default:
      return state;
  }
};

export default buy;
