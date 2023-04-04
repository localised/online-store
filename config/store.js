
import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createStore } from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import productReducer from '../features/product/slice.js';
import cartReducer from '../features/cart/slice.js';
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
})
  
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    } else {
        return combinedReducer(state, action)
    }
}

const makeStore = () => createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const wrapper = createWrapper(makeStore)