import { ADD_ITEM, REMOVE_ITEM, INPUT_CHANGE } from "../constants/types";
import battleAxe from "../../assets/images/items/battle_axe.png";
import woodenShield from "../../assets/images/items/wooden_shield.png";
import bronzeSword from "../../assets/images/items/bronze_sword.png";
import longsword from "../../assets/images/items/longsword.png";
import { Item } from "../../types";

const initialState: Item[] = [
  {
    index: 0,
    id: 101,
    name: "Battle axe",
    price: 120,
    quantity: 20,
    image: "battle_axe.png",
    imageUrl: battleAxe,
    inCart: 0,
  },
  {
    index: 1,
    id: 7,
    name: "Wooden shield",
    price: 150,
    quantity: 50,
    image: "wooden_shield.png",
    imageUrl: woodenShield,
    inCart: 0,
  },
  {
    index: 2,
    id: 2,
    name: "Bronze sword",
    price: 110,
    quantity: 100,
    image: "bronze_sword.png",
    imageUrl: bronzeSword,
    inCart: 0,
  },
  {
    index: 3,
    id: 3,
    name: "Longsword",
    price: 310,
    quantity: 10,
    image: "longsword.png",
    imageUrl: longsword,
    inCart: 0,
  },
];

const items = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          if (item.inCart >= 0 && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - action.payload,
              inCart: item.inCart + action.payload,
            };
          }
        }
        return {
          ...item,
        };
      });
    case REMOVE_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          if (item.inCart > 0) {
            return {
              ...item,
              quantity: item.quantity + action.payload,
              inCart: item.inCart - action.payload,
            };
          }
        }
        return {
          ...item,
        };
      });
    case INPUT_CHANGE:
      return state.map((item, index) => {
        if (index === action.item.index) {
          return {
            ...item,
            quantity:
              item.inCart > action.payload
                ? item.quantity + item.inCart - action.payload
                : item.quantity - (action.payload - item.inCart),
            inCart: action.payload,
          };
        }
        return {
          ...item,
        };
      });
    default:
      return state;
  }
};

export default items;
