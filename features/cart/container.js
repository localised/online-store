import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartDisplayItems } from './selectors';
import CartSection from './component';
import { cartAdd } from './slice';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartDisplayItems,
});

const mapDispatchToProps = dispatch => {
  return {
      addToCart({ skuId }) {
        dispatch(cartAdd({ skuId }))
      },
  };
};

export const CartSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);