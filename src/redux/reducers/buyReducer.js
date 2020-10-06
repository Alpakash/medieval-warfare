import { SELL_ITEMS, ADD_TO_CART, GOLD_SPEND } from "../constants/types";
  
const buy = (state = [], action) => {
  switch (action.type) {
    case SELL_ITEMS:
      // get the index of the item by checking id's of the item
      const index = state.findIndex(
        (item) => item.id === action.itemsInCart.id
      );
      // slice the first part until indexedItem in Array
      // paste te last part after the indexedItem in Array 
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case ADD_TO_CART:
      // hack to push the input value to itemsInCart and show amount in inventory
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
