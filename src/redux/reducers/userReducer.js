import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD,
  CHANGE_MY_GOLD,
  BOUGHT_ITEMS,
} from "../constants/types";

const initialState = {
  id: 1,
  name: "Akash",
  login: "user1@example.com",
  balance: 1200,
  bought: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_MY_GOLD:
      return {
        ...state,
        balance: state.balance + action.item.price,
      };
    case DECREMENT_MY_GOLD:
      return {
        ...state,
        balance: state.balance - action.item.price,
      };
    case CHANGE_MY_GOLD:
      console.log(
        "unfortunately couldn't get the gold working completely correct on input change!"
      );

      action.changeCart < action.item.inCart
      ? console.log((action.item.inCart - action.changeCart) * action.item.price)
      : console.log(action.changeCart * action.item.price);

      return {
        ...state,
        balance:
          action.item.price * action.changeCart <= action.totalPrice.amount
            ? action.changeCart === 0
              ? 1200
              : state.balance + action.item.price * action.changeCart
            : state.balance +
              (action.item.inCart - action.changeCart) * action.item.price,
      };
    case BOUGHT_ITEMS:
      return {
        ...state,
        bought: true,
      };
    default:
      return state;
  }
};

export default user;
