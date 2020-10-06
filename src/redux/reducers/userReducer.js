import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD,
  CHANGE_MY_GOLD,
  BOUGHT_ITEMS,
  GOLD_SPEND,
  CART_GOLD_TO_GOLD
} from "../constants/types";

const initialState = {
  id: 1,
  name: "Akash",
  login: "user1@example.com",
  balance: 1200,
  cartBalance: 1200,
  bought: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_MY_GOLD:
      return {
        ...state,
        cartBalance: state.cartBalance + action.item.price,
      };
    case DECREMENT_MY_GOLD:
      return {
        ...state,
        cartBalance: state.cartBalance - action.item.price,
      };
    case CHANGE_MY_GOLD:
      let newTotalPrice =
        action.item.price * (action.item.inCart - action.changeCart);

      return {
        ...state,
        cartBalance:
          newTotalPrice <= action.totalPrice.amount
            ? action.changeCart === 0
              ? state.cartBalance + action.item.inCart * action.item.price
              : state.cartBalance + newTotalPrice
            : state.cartBalance +
              (action.item.inCart - action.changeCart) * action.item.price,
      };
    case BOUGHT_ITEMS:
      return {
        ...state,
        bought: true,
      };
    case GOLD_SPEND:
      return {
        ...state, 
        balance: state.cartBalance
      };
    case CART_GOLD_TO_GOLD: 
    return {
      ...state,
    }
    default:
      return state;
  }
};

export default user;
