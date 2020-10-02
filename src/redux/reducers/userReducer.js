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
    // case CHANGE_MY_GOLD:
    //   return {
    //     ...state,
    //     balance:          
    //       state.balance - action.item.price * action.changeCart,
    //   };
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
