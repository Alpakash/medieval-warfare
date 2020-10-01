import { BUY_ITEMS, ADD_TO_CART } from '../constants/types';

export const inCart = () => {
    return {
        type: ADD_TO_CART,
        itemsInCart
    }
};

export const buyItems = () => {
    return {
        type: BUY_ITEMS,
    }
}