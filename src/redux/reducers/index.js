import { combineReducers } from 'redux';
import items from './itemReducer';
import user from './userReducer'
import dialogBox from './dialogReducer'
import totalPrice from './priceReducer';
import buy from './buyReducer'

export default combineReducers({
    items,
    user,
    dialogBox,
    totalPrice,
    buy
});