import { ADD_ITEM, REMOVE_ITEM, INPUT_CHANGE } from "../constants/types";

const initialState = [
  {
    index: 0,
    id: 101,
    name: "Battle axe",
    price: 120,
    quantity: 20,
    image: "battle_axe.png",
    inCart: 0
  },
  {
    index: 1,
    id: 7,
    name: "Wooden shield",
    price: 150,
    quantity: 50,
    image: "wooden_shield.png",
    inCart: 0
  },
  {
    index: 2,
    id: 2,
    name: "Bronze sword",
    price: 110,
    quantity: 100,
    image: "bronze_sword.png",
    inCart: 0
  },
  {
    index: 3,
    id: 3,
    name: "Longsword",
    price: 310,
    quantity: 10,
    image: "longsword.png",
    inCart: 0
  },
];

const items = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.map((item, index) => {
        // check if the item.index is equal to the index in items state
        if (index === action.index) {
          // add items to cart if there are more then 0 items in cart
          // and if the item is available
          if (item.inCart >= 0 && item.quantity > 0) {
            return {
              ...item,
              // increment item in cart and decrement quantity of item
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
        // check if the item.index is equal to the index in items state
        if (index === action.index) {
          // remove item from cart if there are more then 0 items in cart
          if (item.inCart > 0) {
            return {
              ...item,
              // decrement item in cart and increment quantity of item
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
        // check if the item.index is equal to the index in items state
        if (index === action.item.index) {
          return {
            ...item,
            quantity:
              item.inCart > action.payload
                ? // the quantity will be updated:
                  // the previous number saved in the cart minus the new input number is deccremented quantity
                  item.quantity + item.inCart - action.payload
                : // increment quantity
                  // getOnChange number minus previousNumber is incremented quantity
                  item.quantity - (action.payload - item.inCart),
            // update the state cart to onChange number
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
