import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware];

// all reducers in store and make react-thunk middleware available
export const store = createStore(rootReducer, undefined, applyMiddleware(...middleware));
