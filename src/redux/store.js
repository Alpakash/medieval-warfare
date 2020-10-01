import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware];

export const store = createStore(rootReducer, undefined, applyMiddleware(...middleware));