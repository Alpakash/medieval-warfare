import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD,
  CHANGE_MY_GOLD,
  BOUGHT_ITEMS,
  GOLD_SPEND
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
      console.log(
        "unfortunately couldn't get the gold working completely correct on input change!"
      );

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
        balance: state.balance = state.cartBalance
      };
    default:
      return state;
  }
};

export default user;
