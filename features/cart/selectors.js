import { createSelector } from '@reduxjs/toolkit';
import { selectSkus } from '../product/selectors';

const selectCartItems = state => state.cart.cartItems;

export const selectCartDisplayItems = createSelector(
  selectCartItems,
  selectSkus,
    (cartItems =  {}, skus = []) => {
      return Object.keys(cartItems).map(cartItemSku => ({
        ...skus.find(sku => sku.skuId === cartItemSku),
        quantity: cartItems[cartItemSku].quantity,
      })
    );
  }
);

