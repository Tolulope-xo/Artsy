import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';

const initialState = {
  cart: { value: [] },

};

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,initialState
});

export default store;

