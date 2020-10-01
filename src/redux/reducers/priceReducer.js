import {
  INCREMENT_TOTAL,
  DECREMENT_TOTAL
} from "../constants/types";

const initialState = {
  amount: 0,
};

const totalPrice = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL:
      return {
        ...state,
        amount: state.amount + action.item.price,
      };

    case DECREMENT_TOTAL:
      console.log(action.item);
        
          return {
            ...state,
            amount: state.amount - action.item.price,
          };
    default:
      return state;
  }
};

export default totalPrice;