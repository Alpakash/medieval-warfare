import { combineReducers } from 'redux';
import items from './itemReducer';
import user from './userReducer'
import dialogBox from './dialogReducer'
import totalPrice from './priceReducer';
import buy from './buyReducer'
import { RootState } from '../../types';

export default combineReducers<RootState>({
    items,
    user,
    dialogBox,
    totalPrice,
    buy
});
