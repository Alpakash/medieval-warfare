import {
  INCREMENT_TOTAL,
  DECREMENT_TOTAL,
  CHANGE_TOTAL,
} from "../constants/types";
import { TotalPriceState } from "../../types";

const initialState: TotalPriceState = {
  amount: 0,
};

const totalPrice = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_TOTAL:
      return {
        ...state,
        amount: state.amount + action.item.price,
      };

    case DECREMENT_TOTAL:       
          return {
            ...state,
            amount: state.amount - action.item.price,
          };
    case CHANGE_TOTAL:
      return {
        ...state,
        amount: action.item.price * action.changeCart
      }
    default:
      return state;
  }
};

export default totalPrice;
