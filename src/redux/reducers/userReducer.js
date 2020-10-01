import {
  INCREMENT_MY_GOLD,
  DECREMENT_MY_GOLD
} from "../constants/types";

const initialState = {
  id: 1,
  name: "Akash",
  login: "user1@example.com",
  balance: 1200,
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_MY_GOLD:
      return {
        ...state,
        balance: state.balance + action.item.price
      }
    case DECREMENT_MY_GOLD:
      return {
        ...state,
        balance: state.balance - action.item.price,
      };
    default:
        return state;
  }
}

export default user;