import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      cartAdd: (state, action) => {
        if (!state.cartItems[action.payload.skuId]) {
            state.cartItems[action.payload.skuId] = {
                quantity: 1,
                sku: action.payload
            };
        } else {
            state.cartItems[action.payload.skuId].quantity += 1;
        }
      }
    },
});

export const { cartAdd } = cartSlice.actions;

export default cartSlice.reducer;